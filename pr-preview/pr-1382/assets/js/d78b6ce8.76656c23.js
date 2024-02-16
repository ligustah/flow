"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2588],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="OracleDB",l={unversionedId:"reference/Connectors/capture-connectors/oracle-db",id:"reference/Connectors/capture-connectors/oracle-db",title:"OracleDB",description:"This connector captures data from OracleDB into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/oracle-db.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/oracle-db",permalink:"/pr-preview/pr-1382/reference/Connectors/capture-connectors/oracle-db",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/oracle-db.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Google Analytics 4",permalink:"/pr-preview/pr-1382/reference/Connectors/capture-connectors/google-analytics-4"},next:{title:"Pinterest",permalink:"/pr-preview/pr-1382/reference/Connectors/capture-connectors/pinterest"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Set up the OracleDB connector in Estuary Flow",id:"set-up-the-oracledb-connector-in-estuary-flow",level:3},{value:"Create a Dedicated User",id:"create-a-dedicated-user",level:3},{value:"Include Schemas for Discovery",id:"include-schemas-for-discovery",level:3},{value:"SSH Tunnel Configuration",id:"ssh-tunnel-configuration",level:3},{value:"Encryption Options",id:"encryption-options",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"oracledb"},"OracleDB"),(0,a.kt)("p",null,"This connector captures data from OracleDB into Flow collections."),(0,a.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ghcr.io/estuary/source-oracle:dev provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Oracle 11g or above"),(0,a.kt)("li",{parentName:"ul"},"Allow connections from Estuary Flow to your Oracle database (if they exist in separate VPCs)"),(0,a.kt)("li",{parentName:"ul"},"Create a dedicated read-only Estuary Flow user with access to all tables needed for replication")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Follow the steps below to set up the OracleDB connector."),(0,a.kt)("h3",{id:"set-up-the-oracledb-connector-in-estuary-flow"},"Set up the OracleDB connector in Estuary Flow"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log into your Estuary Flow account."),(0,a.kt)("li",{parentName:"ol"},'In the left navigation bar, click on "Captures". In the top-left corner, click "Connector Search".'),(0,a.kt)("li",{parentName:"ol"},'Enter the name for the OracleDB connector and select "Oracle Database" from the dropdown.'),(0,a.kt)("li",{parentName:"ol"},"Enter a Primary Key using the standard form editor."),(0,a.kt)("li",{parentName:"ol"},"Add Schemas: JDBC URL Params. Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (example: key1=value1&key2=value2&key3=value3)."),(0,a.kt)("li",{parentName:"ol"},"Choose an option to Connect By:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Service Name"),(0,a.kt)("li",{parentName:"ul"},"System ID")),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"On the next page, select your Cursor Field.  This currently has to be either a string or Timestamp value.")),(0,a.kt)("h3",{id:"create-a-dedicated-user"},"Create a Dedicated User"),(0,a.kt)("p",null,"Creating a dedicated database user with read-only access is recommended for better permission control and auditing."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To create the user, run the following commands against your database:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER estuary_flow_user IDENTIFIED BY <your_password_here>;\nGRANT CREATE SESSION TO estuary_flow_user;\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Next, grant the user read-only access to the relevant tables. The simplest way is to grant read access to all tables in the schema as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ANY TABLE TO estuary_flow_user;\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Alternatively, you can be more granular and grant access to specific tables in different schemas:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'GRANT SELECT ON "<schema_a>"."<table_1>" TO estuary_flow_user;\nGRANT SELECT ON "<schema_b>"."<table_2>" TO estuary_flow_user;\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Your database user should now be ready for use with Estuary Flow.")),(0,a.kt)("h3",{id:"include-schemas-for-discovery"},"Include Schemas for Discovery"),(0,a.kt)("p",null,"In your Oracle configuration, you can specify the schemas that Flow should look at when discovering tables. The schema names are case-sensitive and will default to the upper-cased user if empty. If the user does not have access to the configured schemas, no tables will be discovered."),(0,a.kt)("h3",{id:"ssh-tunnel-configuration"},"SSH Tunnel Configuration"),(0,a.kt)("p",null,"If your Oracle instance is not directly accessible and you need to connect via an SSH tunnel, follow these additional steps."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Choose the SSH Tunnel Method:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No Tunnel (default) for a direct connection."),(0,a.kt)("li",{parentName:"ul"},"SSH Key Authentication or Password Authentication for SSH tunneling.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"SSH Tunnel Jump Server Host: Provide the hostname or IP Address of the intermediate (bastion) server that Estuary Flow will connect to.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"SSH Connection Port: Set the port on the bastion server with which to make the SSH connection. The default port for SSH connections is 22.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"SSH Login Username: The username that Estuary Flow should use when connecting to the bastion server. This is NOT the Oracle username."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For Password Authentication: Set SSH Login Username to the password of the user created in Step 2."),(0,a.kt)("li",{parentName:"ul"},"For SSH Key Authentication: Leave SSH Login Username blank.")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"SSH Private Key (for SSH Key Authentication): Provide the RSA Private Key that you are using to create the SSH connection. The key should be in PEM format, starting with -----BEGIN RSA PRIVATE KEY----- and ending with -----END RSA PRIVATE KEY-----.")),(0,a.kt)("h3",{id:"encryption-options"},"Encryption Options"),(0,a.kt)("p",null,"Estuary Flow has the ability to connect to the Oracle source with 3 network connectivity options:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Unencrypted: The connection will be made using the TCP protocol, transmitting all data over the network in unencrypted form.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Native Network Encryption: Gives you the ability to encrypt database connections, without the configuration overhead of TCP/IP and SSL/TLS and without the need to open and listen on different ports. In this case, the SQLNET.ENCRYPTION_CLIENT option will always be set as REQUIRED by default. The client or server will only accept encrypted traffic, but the user has the opportunity to choose an Encryption algorithm according to the security policies they need.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"TLS Encrypted (verify certificate): If this option is selected, data transfer will be transmitted using the TLS protocol, taking into account the handshake procedure and certificate verification. To use this option, insert the content of the certificate issued by the server into the SSL PEM file field."))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file. See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.estuary.dev/concepts/connectors/#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the OracleDB source connector."),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("h4",{id:"endpoint"},"Endpoint"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/host")),(0,a.kt)("td",{parentName:"tr",align:null},"Host"),(0,a.kt)("td",{parentName:"tr",align:null},"Hostname of the database."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/port")),(0,a.kt)("td",{parentName:"tr",align:null},"Port"),(0,a.kt)("td",{parentName:"tr",align:null},"Port of the database. Oracle Corporations recommends the following port numbers: 1521 - Default listening port for client connections to the listener. 2484 - Recommended and officially registered listening port for client connections to the listener using TCP/IP with SSL"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/user")),(0,a.kt)("td",{parentName:"tr",align:null},"User"),(0,a.kt)("td",{parentName:"tr",align:null},"The username which is used to access the database."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/password")),(0,a.kt)("td",{parentName:"tr",align:null},"Password"),(0,a.kt)("td",{parentName:"tr",align:null},"The password associated with the username"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h4",{id:"bindings"},"Bindings"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,a.kt)("td",{parentName:"tr",align:null},"Stream"),(0,a.kt)("td",{parentName:"tr",align:null},"Resource of your OracleDB project from which collections are captured."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,a.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,a.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h3",{id:"sample"},"Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "required": [\n    "host",\n    "port",\n    "username",\n    "connection_data",\n    "encryption"\n  ],\n  "properties": {\n    "connection_data": {\n      "default": {\n        "connection_type": "service_name"\n      },\n      "discriminator": {\n        "propertyName": "connection_type"\n      },\n      "oneOf": [\n        {\n          "description": "Use service name",\n          "properties": {\n            "connection_type": {\n              "const": "service_name",\n              "order": 0,\n              "type": "string",\n              "default": "service_name"\n            },\n            "service_name": {\n              "order": 1,\n              "title": "Service name",\n              "type": "string"\n            }\n          },\n          "required": [\n            "service_name"\n          ],\n          "title": "Service name"\n        },\n        {\n          "description": "Use SID (Oracle System Identifier)",\n          "properties": {\n            "connection_type": {\n              "const": "sid",\n              "order": 0,\n              "type": "string",\n              "default": "sid"\n            },\n            "sid": {\n              "order": 1,\n              "title": "System ID (SID)",\n              "type": "string"\n            }\n          },\n          "required": [\n            "sid"\n          ],\n          "title": "System ID (SID)"\n        }\n      ]\n    },\n    "encryption": {\n      "default": {\n        "encryption_method": "unencrypted"\n      },\n      "discriminator": {\n        "propertyName": "encryption_method"\n      },\n      "oneOf": [\n        {\n          "description": "Data transfer will not be encrypted.",\n          "properties": {\n            "encryption_method": {\n              "const": "unencrypted",\n              "type": "string",\n              "default": "unencrypted"\n            }\n          },\n          "required": [\n            "encryption_method"\n          ],\n          "title": "Unencrypted"\n        },\n        {\n          "description": "The native network encryption gives you the ability to encrypt database connections, without the configuration overhead of TCP/IP and SSL/TLS and without the need to open and listen on different ports.",\n          "properties": {\n            "encryption_algorithm": {\n              "default": "AES256",\n              "description": "This parameter defines what encryption algorithm is used.",\n              "enum": [\n                "AES256",\n                "RC4_56",\n                "3DES168"\n              ],\n              "title": "Encryption Algorithm",\n              "type": "string"\n            },\n            "encryption_method": {\n              "const": "client_nne",\n              "type": "string",\n              "default": "client_nne"\n            }\n          },\n          "required": [\n            "encryption_method"\n          ],\n          "title": "Native Network Encryption (NNE)"\n        },\n        {\n          "description": "Verify and use the certificate provided by the server.",\n          "properties": {\n            "encryption_method": {\n              "const": "encrypted_verify_certificate",\n              "type": "string",\n              "default": "encrypted_verify_certificate"\n            },\n            "ssl_certificate": {\n              "airbyte_secret": true,\n              "description": "Privacy Enhanced Mail (PEM) files are concatenated certificate containers frequently used in certificate installations.",\n              "multiline": true,\n              "order": 4,\n              "title": "SSL PEM File",\n              "type": "string"\n            }\n          },\n          "required": [\n            "encryption_method",\n            "ssl_certificate"\n          ],\n          "title": "TLS Encrypted (verify certificate)"\n        }\n      ]\n    },\n    "port": {\n      "description": "Port of the database. Oracle Corporations recommends the following port numbers: 1521 - Default listening port for client connections to the listener. 2484 - Recommended and officially registered listening port for client connections to the listener using TCP/IP with SSL"\n    },\n    "tunnel_method": {\n      "default": {\n        "tunnel_method": "NO_TUNNEL"\n      },\n      "discriminator": {\n        "propertyName": "tunnel_method"\n      },\n      "oneOf": [\n        {\n          "properties": {\n            "tunnel_method": {\n              "const": "NO_TUNNEL",\n              "description": "No ssh tunnel needed to connect to database",\n              "order": 0,\n              "type": "string",\n              "default": "NO_TUNNEL"\n            }\n          },\n          "required": [\n            "tunnel_method"\n          ],\n          "title": "No Tunnel"\n        },\n        {\n          "properties": {\n            "ssh_key": {\n              "airbyte_secret": true,\n              "description": "OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )",\n              "multiline": true,\n              "order": 4,\n              "title": "SSH Private Key",\n              "type": "string"\n            },\n            "tunnel_host": {\n              "description": "Hostname of the jump server host that allows inbound ssh tunnel.",\n              "order": 1,\n              "title": "SSH Tunnel Jump Server Host",\n              "type": "string"\n            },\n            "tunnel_method": {\n              "const": "SSH_KEY_AUTH",\n              "description": "Connect through a jump server tunnel host using username and ssh key",\n              "order": 0,\n              "type": "string",\n              "default": "SSH_KEY_AUTH"\n            },\n            "tunnel_port": {\n              "default": 22,\n              "description": "Port on the proxy/jump server that accepts inbound ssh connections.",\n              "examples": [\n                "22"\n              ],\n              "maximum": 65536,\n              "minimum": 0,\n              "order": 2,\n              "title": "SSH Connection Port",\n              "type": "integer"\n            },\n            "tunnel_user": {\n              "description": "OS-level username for logging into the jump server host.",\n              "order": 3,\n              "title": "SSH Login Username",\n              "type": "string"\n            }\n          },\n          "required": [\n            "tunnel_method",\n            "tunnel_host",\n            "tunnel_port",\n            "tunnel_user",\n            "ssh_key"\n          ],\n          "title": "SSH Key Authentication"\n        },\n        {\n          "properties": {\n            "tunnel_host": {\n              "description": "Hostname of the jump server host that allows inbound ssh tunnel.",\n              "order": 1,\n              "title": "SSH Tunnel Jump Server Host",\n              "type": "string"\n            },\n            "tunnel_method": {\n              "const": "SSH_PASSWORD_AUTH",\n              "description": "Connect through a jump server tunnel host using username and password authentication",\n              "order": 0,\n              "type": "string",\n              "default": "SSH_PASSWORD_AUTH"\n            },\n            "tunnel_port": {\n              "default": 22,\n              "description": "Port on the proxy/jump server that accepts inbound ssh connections.",\n              "examples": [\n                "22"\n              ],\n              "maximum": 65536,\n              "minimum": 0,\n              "order": 2,\n              "title": "SSH Connection Port",\n              "type": "integer"\n            },\n            "tunnel_user": {\n              "description": "OS-level username for logging into the jump server host",\n              "order": 3,\n              "title": "SSH Login Username",\n              "type": "string"\n            },\n            "tunnel_user_password": {\n              "airbyte_secret": true,\n              "description": "OS-level password for logging into the jump server host",\n              "order": 4,\n              "title": "Password",\n              "type": "string"\n            }\n          },\n          "required": [\n            "tunnel_method",\n            "tunnel_host",\n            "tunnel_port",\n            "tunnel_user",\n            "tunnel_user_password"\n          ],\n          "title": "Password Authentication"\n        }\n      ]\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);