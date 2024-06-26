use anyhow::Context;
use bytes::BufMut;
use kafka_protocol::{
    messages,
    protocol::{Builder, Decodable, Encodable},
};

mod topology;
use topology::{fetch_all_collection_names, Collection, Partition};

mod read;
use read::Read;

mod session;
pub use session::Session;

pub mod registry;

pub struct App {
    /// Anonymous API client for the Estuary control plane.
    pub anon_client: postgrest::Postgrest,
    /// Hostname which is advertised for Kafka access.
    pub advertise_host: String,
    /// Port which is advertised for Kafka access.
    pub advertise_kafka_port: u16,
}

impl App {
    #[tracing::instrument(level = "info", err(Debug, level = "warn"), skip(self, password))]
    async fn authenticate(
        &self,
        username: &str,
        password: &str,
    ) -> anyhow::Result<postgrest::Postgrest> {
        // The "username" will eventually hold session configuration state.
        // Reserve the ability to do this by ensuring it currently equals '{}'.
        if username != "{}" {
            anyhow::bail!(RESERVED_USERNAME_ERR);
        }
        let _config: serde_json::Map<String, serde_json::Value> =
            serde_json::from_str(username).context("failed to parse username as a JSON object")?;

        #[derive(serde::Deserialize)]
        struct RefreshToken {
            id: String,
            secret: String,
        }
        let RefreshToken {
            id: refresh_token_id,
            secret,
        } = serde_json::from_slice(&base64::decode(password).context("password is not base64")?)
            .context("failed to decode refresh token from password")?;

        tracing::info!(refresh_token_id, "authenticating refresh token");

        #[derive(serde::Deserialize)]
        struct AccessToken {
            access_token: String,
        }
        let AccessToken { access_token } = self
            .anon_client
            .rpc(
                "generate_access_token",
                serde_json::json!({"refresh_token_id": refresh_token_id, "secret": secret})
                    .to_string(),
            )
            .execute()
            .await
            .and_then(|r| r.error_for_status())
            .context("generating access token")?
            .json()
            .await?;

        Ok(self
            .anon_client
            .clone()
            .insert_header("Authorization", format!("Bearer {access_token}")))
    }
}

/// Dispatch a read request `frame` of the current session, writing its response into `out`.
/// `raw_sasl_auth` is the state of SASL "raw" mode authentication,
/// and conditions the interpretation of request frames.
#[tracing::instrument(level = "trace", err(level = "warn"), skip_all)]
pub async fn dispatch_request_frame(
    session: &mut Session,
    raw_sasl_auth: &mut bool,
    frame: bytes::BytesMut,
    out: &mut bytes::BytesMut,
) -> anyhow::Result<()> {
    use messages::*;

    /*
    println!(
        "full frame:\n{}",
        hexdump::hexdump_iter(&frame)
            .map(|line| format!(" {line}"))
            .collect::<Vec<_>>()
            .join("\n")
    );
    */

    let (api_key, version) = if !*raw_sasl_auth {
        let api_key = i16::from_be_bytes(frame[0..2].try_into().context("parsing api key")?);
        let api_key = messages::ApiKey::try_from(api_key)
            .map_err(|()| anyhow::anyhow!("invalid request API key: {api_key}"))?;

        let version =
            i16::from_be_bytes(frame[2..4].try_into().context("parsing request version")?);

        (api_key, version)
    } else {
        (messages::ApiKey::SaslAuthenticateKey, 0)
    };

    /*
    tracing::debug!(version, ?api_key, "parsed API key and version");
    println!(
        "payload frame:\n{}",
        hexdump::hexdump_iter(&frame)
            .map(|line| format!(" {line}"))
            .collect::<Vec<_>>()
            .join("\n")
    );
    */

    match api_key {
        ApiKey::ApiVersionsKey => {
            // https://github.com/confluentinc/librdkafka/blob/e03d3bb91ed92a38f38d9806b8d8deffe78a1de5/src/rdkafka_request.c#L2823
            let (header, request) = dec_request(version >= 3, frame)?;
            Ok(enc_resp(out, &header, session.api_versions(request).await?))
        }
        ApiKey::SaslHandshakeKey => {
            let (header, request) = dec_request(false, frame)?;
            *raw_sasl_auth = header.request_api_version == 0;
            Ok(enc_resp(
                out,
                &header,
                session.sasl_handshake(request).await?,
            ))
        }
        ApiKey::SaslAuthenticateKey if *raw_sasl_auth => {
            *raw_sasl_auth = false;

            let request = messages::SaslAuthenticateRequest::builder()
                .auth_bytes(frame.freeze())
                .build()
                .unwrap();
            let response = session.sasl_authenticate(request).await?;

            out.put_i32(response.auth_bytes.len() as i32);
            out.extend(response.auth_bytes);
            Ok(())
        }
        ApiKey::SaslAuthenticateKey => {
            let (header, request) = dec_request(false, frame)?;
            Ok(enc_resp(
                out,
                &header,
                session.sasl_authenticate(request).await?,
            ))
        }
        ApiKey::MetadataKey => {
            // https://github.com/confluentinc/librdkafka/blob/e03d3bb91ed92a38f38d9806b8d8deffe78a1de5/src/rdkafka_request.c#L2417
            let (header, request) = dec_request(version >= 9, frame)?;
            Ok(enc_resp(out, &header, session.metadata(request).await?))
        }
        ApiKey::FindCoordinatorKey => {
            let (header, request) = dec_request(false, frame)?;
            Ok(enc_resp(
                out,
                &header,
                session.find_coordinator(request).await?,
            ))
        }
        ApiKey::ListOffsetsKey => {
            let (header, request) = dec_request(false, frame)?;
            Ok(enc_resp(out, &header, session.list_offsets(request).await?))
        }

        ApiKey::FetchKey => {
            let (header, request) = dec_request(false, frame)?;
            Ok(enc_resp(out, &header, session.fetch(request).await?))
        }

        ApiKey::OffsetCommitKey => {
            let (header, request) = dec_request(false, frame)?;
            Ok(enc_resp(
                out,
                &header,
                session.offset_commit(request).await?,
            ))
        }

        ApiKey::DescribeConfigsKey => {
            let (header, request) = dec_request(false, frame)?;
            Ok(enc_resp(
                out,
                &header,
                session.describe_configs(request).await?,
            ))
        }
        /*
        ApiKey::CreateTopicsKey => Ok(K::CreateTopicsRequest(CreateTopicsRequest::decode(b, v)?)),
        ApiKey::ListGroupsKey => Ok(K::ListGroupsRequest(ListGroupsRequest::decode(b, v)?)),
        */
        _ => anyhow::bail!("unsupported request type {api_key:?}"),
    }
}

// Easier dispatch to type-specific decoder by using result-type inference.
fn dec_request<T: kafka_protocol::protocol::Decodable + std::fmt::Debug>(
    flexver: bool,
    mut frame: bytes::BytesMut,
) -> anyhow::Result<(messages::RequestHeader, T)> {
    let header = messages::RequestHeader::decode(&mut frame, if flexver { 2 } else { 1 })?;

    let request = T::decode(&mut frame, header.request_api_version).with_context(|| {
        format!(
            "failed to decode {} with header {header:?}",
            std::any::type_name::<T>()
        )
    })?;

    if !frame.is_empty() {
        anyhow::bail!(
            "frame has {} bytes remaining after decoding {}",
            frame.len(),
            std::any::type_name::<T>()
        );
    }
    tracing::trace!(?request, ?header, "decoded request");

    Ok((header, request))
}

// Encodes a complete frame for the given request header and response payload.
fn enc_resp<
    T: kafka_protocol::protocol::Encodable + kafka_protocol::protocol::HeaderVersion + std::fmt::Debug,
>(
    b: &mut bytes::BytesMut,
    rh: &messages::RequestHeader,
    response: T,
) {
    b.put_i32(0); // Length header placeholder.
    let offset = b.len();

    let mut wh = messages::ResponseHeader::default();
    wh.correlation_id = rh.correlation_id;
    wh.encode(b, T::header_version(rh.request_api_version))
        .expect("encoding ResponseHeader does not fail");
    response
        .encode(b, rh.request_api_version)
        .expect("encoding response payload does not fail");

    // Go back and write the length header.
    let len = (b.len() - offset) as u32;
    b[(offset - 4)..offset].copy_from_slice(&len.to_be_bytes());
}

const RESERVED_USERNAME_ERR : &str = "The configured username must be '{}' because Dekaf may use it for optional configuration in the future.";
