"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2750],{2027:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(74848),o=s(28453);const i={sidebar_position:8},r="Configure connections with SSH tunneling",c={id:"guides/connect-network",title:"Configure connections with SSH tunneling",description:"Flow connects to certain types of endpoints \u2014 generally databases \u2014 using their IP address and port.",source:"@site/docs/guides/connect-network.md",sourceDirName:"guides",slug:"/guides/connect-network",permalink:"/pr-preview/pr-1452/guides/connect-network",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/connect-network.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Troubleshoot a task with flowctl",permalink:"/pr-preview/pr-1452/guides/flowctl/troubleshoot-task"},next:{title:"Customize materialized fields",permalink:"/pr-preview/pr-1452/guides/customize-materialization-fields"}},a={},l=[{value:"General setup",id:"general-setup",level:2},{value:"Setup for AWS",id:"setup-for-aws",level:2},{value:"Setup for Google Cloud",id:"setup-for-google-cloud",level:2},{value:"Setup for Azure",id:"setup-for-azure",level:2},{value:"Configuration",id:"configuration",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configure-connections-with-ssh-tunneling",children:"Configure connections with SSH tunneling"}),"\n",(0,t.jsxs)(n.p,{children:["Flow connects to certain types of endpoints \u2014 generally databases \u2014 using their IP address and port.\nFor added security, you can configure ",(0,t.jsx)(n.a,{href:"https://www.ssh.com/academy/ssh/tunneling/example#local-forwarding",children:"SSH tunneling"}),", also known as port forwarding.\nYou configure this in the ",(0,t.jsx)(n.code,{children:"networkTunnel"})," section of applicable capture or materialization definitions, but\nbefore you can do so, you need a properly configured SSH server on your internal network or cloud hosting platform."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If permitted by your organization, a quicker way to connect to a secure database is to whitelist the Estuary IP address, ",(0,t.jsx)(n.code,{children:"34.121.207.128"}),".\nFor help completing this task on different cloud hosting platforms,\nsee the documentation for the ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1452/reference/Connectors/",children:"connector"})," you're using."]})}),"\n",(0,t.jsx)(n.p,{children:"This guide includes setup steps for popular cloud platforms,\nas well as generalized setup that provides a basic roadmap for on-premise servers or other cloud platforms."}),"\n",(0,t.jsxs)(n.p,{children:["After completing the appropriate setup requirements, proceed to the ",(0,t.jsx)(n.a,{href:"#configuration",children:"configuration"})," section\nto add your SSH server to your capture or materialization definition."]}),"\n",(0,t.jsx)(n.h2,{id:"general-setup",children:"General setup"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Activate an ",(0,t.jsx)(n.a,{href:"https://www.ssh.com/academy/ssh/server#availability-of-ssh-servers",children:"SSH implementation on a server"}),", if you don't have one already.\nConsult the documentation for your server's operating system and/or cloud service provider, as the steps will vary.\nConfigure the server to your organization's standards, or reference the ",(0,t.jsx)(n.a,{href:"https://www.ssh.com/academy/ssh/sshd_config",children:"SSH documentation"})," for\nbasic configuration options."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Referencing the config files and shell output, collect the following information:"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The SSH ",(0,t.jsx)(n.strong,{children:"user"}),", which will be used to log into the SSH server, for example, ",(0,t.jsx)(n.code,{children:"sshuser"}),". You may choose to create a new\nuser for this workflow."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.strong,{children:"SSH endpoint"})," for the SSH server, formatted as ",(0,t.jsx)(n.code,{children:"ssh://user@hostname[:port]"}),". This may look like the any of following:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ssh://sshuser@ec2-198-21-98-1.compute-1.amazonaws.com"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ssh://sshuser@198.21.98.1"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ssh://sshuser@198.21.98.1:22"})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Hint",type:"info",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://www.ssh.com/academy/ssh/port",children:"SSH default port is 22"}),".\nDepending on where your server is hosted, you may not be required to specify a port,\nbut we recommend specifying ",(0,t.jsx)(n.code,{children:":22"})," in all cases to ensure a connection can be made."]})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.code,{children:".ssh"})," subdirectory of your user home directory,\nlook for the PEM file that contains the private SSH key. Check that it starts with ",(0,t.jsx)(n.code,{children:"-----BEGIN RSA PRIVATE KEY-----"}),",\nwhich indicates it is an RSA-based file.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If no such file exists, generate one using the command:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"   ssh-keygen -m PEM -t rsa\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If a PEM file exists, but starts with ",(0,t.jsx)(n.code,{children:"-----BEGIN OPENSSH PRIVATE KEY-----"}),", convert it with the command:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'   ssh-keygen -p -N "" -m pem -f /path/to/key\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Taken together, these configuration details would allow you to log into the SSH server from your local machine.\nThey'll allow the connector to do the same."}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Configure your internal network to allow the SSH server to access your capture or materialization endpoint."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To grant external access to the SSH server, it's essential to configure your network settings accordingly. The approach you take will be dictated by your organization's IT policies. One recommended step is to whitelist Estuary's IP address, which is ",(0,t.jsx)(n.code,{children:"34.121.207.128"}),". This ensures that connections from this specific IP are permitted through your network's firewall or security measures."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setup-for-aws",children:"Setup for AWS"}),"\n",(0,t.jsxs)(n.p,{children:["To allow SSH tunneling to a database instance hosted on AWS, you'll need to create a virtual computing environment, or ",(0,t.jsx)(n.em,{children:"instance"}),", in Amazon EC2."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Begin by finding your public SSH key on your local machine.\nIn the ",(0,t.jsx)(n.code,{children:".ssh"})," subdirectory of your user home directory,\nlook for the PEM file that contains the private SSH key. Check that it starts with ",(0,t.jsx)(n.code,{children:"-----BEGIN RSA PRIVATE KEY-----"}),",\nwhich indicates it is an RSA-based file."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If no such file exists, generate one using the command:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"   ssh-keygen -m PEM -t rsa\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If a PEM file exists, but starts with ",(0,t.jsx)(n.code,{children:"-----BEGIN OPENSSH PRIVATE KEY-----"}),", convert it with the command:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'   ssh-keygen -p -N "" -m pem -f /path/to/key\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#how-to-generate-your-own-key-and-import-it-to-aws",children:"Import your SSH key into AWS"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/LaunchingAndUsingInstances.html",children:"Launch a new instance in EC2"}),". During setup:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Configure the security group to allow SSH connection from anywhere."}),"\n",(0,t.jsx)(n.li,{children:"When selecting a key pair, choose the key you just imported."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstances.html",children:"Connect to the instance"}),",\nsetting the user name to ",(0,t.jsx)(n.code,{children:"ec2-user"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Find and note the ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html#vpc-dns-viewing",children:"instance's public DNS"}),". This will be formatted like: ",(0,t.jsx)(n.code,{children:"ec2-198-21-98-1.compute-1.amazonaws.com"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setup-for-google-cloud",children:"Setup for Google Cloud"}),"\n",(0,t.jsx)(n.p,{children:"To allow SSH tunneling to a database instance hosted on Google Cloud, you must set up a virtual machine (VM)."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Begin by finding your public SSH key on your local machine.\nIn the ",(0,t.jsx)(n.code,{children:".ssh"})," subdirectory of your user home directory,\nlook for the PEM file that contains the private SSH key. Check that it starts with ",(0,t.jsx)(n.code,{children:"-----BEGIN RSA PRIVATE KEY-----"}),",\nwhich indicates it is an RSA-based file."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If no such file exists, generate one using the command:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"   ssh-keygen -m PEM -t rsa\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If a PEM file exists, but starts with ",(0,t.jsx)(n.code,{children:"-----BEGIN OPENSSH PRIVATE KEY-----"}),", convert it with the command:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'   ssh-keygen -p -N "" -m pem -f /path/to/key\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If your Google login differs from your local username, generate a key that includes your Google email address as a comment:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"   ssh-keygen -m PEM -t rsa -C user@domain.com\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://cloud.google.com/compute/docs/instances/create-start-instance",children:"Create and start a new VM in GCP"}),", ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/compute/docs/images/os-details#user-space-features",children:"choosing an image that supports OS Login"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://cloud.google.com/compute/docs/connect/add-ssh-keys",children:"Add your public key to the VM"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address",children:"Reserve an external IP address"})," and connect it to the VM during setup.\nNote the generated address."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setup-for-azure",children:"Setup for Azure"}),"\n",(0,t.jsx)(n.p,{children:"To allow SSH tunneling to a database instance hosted on Azure, you'll need to create a virtual machine (VM) in the same virtual network as your endpoint database."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Begin by finding your public SSH key on your local machine.\nIn the ",(0,t.jsx)(n.code,{children:".ssh"})," subdirectory of your user home directory,\nlook for the PEM file that contains the private SSH key. Check that it starts with ",(0,t.jsx)(n.code,{children:"-----BEGIN RSA PRIVATE KEY-----"}),",\nwhich indicates it is an RSA-based file."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If no such file exists, generate one using the command:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"   ssh-keygen -m PEM -t rsa\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If a PEM file exists, but starts with ",(0,t.jsx)(n.code,{children:"-----BEGIN OPENSSH PRIVATE KEY-----"}),", convert it with the command:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'   ssh-keygen -p -N "" -m pem -f /path/to/key\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create and connect to a VM in a ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview",children:"virtual network"}),", and add the endpoint database to the network."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/virtual-network/quick-create-portal",children:"Create a new virtual network and subnet"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal",children:"Linux"})," or ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/windows/quick-create-portal",children:"Windows"})," VM within the virtual network,\ndirecting the SSH public key source to the public key you generated previously."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Note the VM's public IP; you'll need this later."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a service endpoint for your database in the same virtual network as your VM.\nInstructions for Azure Database For PostgreSQL can be found ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/postgresql/howto-manage-vnet-using-portal",children:"here"}),";\nnote that instructions for other database engines may be different."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"After you've completed the prerequisites, you should have the following parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SSH Endpoint"})," / ",(0,t.jsx)(n.code,{children:"sshEndpoint"}),": the remote SSH server's hostname, or public IP address, formatted as ",(0,t.jsx)(n.code,{children:"ssh://user@hostname[:port]"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://www.ssh.com/academy/ssh/port",children:"SSH default port is 22"}),".\nDepending on where your server is hosted, you may not be required to specify a port,\nbut we recommend specifying ",(0,t.jsx)(n.code,{children:":22"})," in all cases to ensure a connection can be made."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Private Key"})," / ",(0,t.jsx)(n.code,{children:"privateKey"}),": the contents of the SSH private key file"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Use these to add SSH tunneling to your capture or materialization definition, either by filling in the corresponding fields\nin the web app, or by working with the YAML directly. Reference the ",(0,t.jsx)(n.a,{href:"../../concepts/connectors/#connecting-to-endpoints-on-secure-networks",children:"Connectors"})," page for a YAML sample."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(96540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);