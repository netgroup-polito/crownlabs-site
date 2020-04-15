+++
fragment = "content"
#disabled = true
date = "2020-04-15"
weight = 100
#background = ""
#title = "Deploying"
#subtitle = ""
+++


## Deploying CrownLabs

The CrownLabs service comes as non-trivial composition of multiple components, all running as microservices in Kubernetes.
While most of the components already exist, some *glue logic* has been written by the CrownLabs team to integrate them in the service we want to provide.

CrownLabs runs in a Kubernetes cluster, whose setup may be more or less complex depending on the requested features (e.g., scalability, external load balacing, high availability, etc). As an example, the [CrownLabs GitHub repository](https://github.com/netgroup-polito/CrownLabs/) provides some insights about how the experimental cluster @Politecnico di Torino has been setup.

If you want to create your own CrownLabs instance, you have to install all the components with your own custom configuration files, which may largely depend upon your physical install.
A huge degree of customization is possible in this respect: pure data-link vs. BGP-based load balancing, the number (and capabilities) of your servers, the desired degree of high availability, integration with external authentication servers, creation of admin/user credentials, your own *secrets* to protect the internal communication among the components.

Do not expect to complete this task in a few hours; likely, you may need several days, or even more.
Definitely, you need to have at least some familiarity with Kubernetes.


### Architecture overview

Although Kubernetes has been designed for containers and not for virtual machines, it has been chosen because is very scalable, has many built-in features (e.g., autoscaling), is extendible (CRDs), is more forward-looking, and features an incredible ecosystem of companion services.
And, last but not least, is *cool* and provides more *fun* to the CrownLabs team.

To deliver the CrownLabs service, we leverage several components in the Kubernetes ecosystem.
Among the other, we use:
- **Kubevirt**, as virtualization platform;
- **MetalLB**, as (software) load balancer;
- **Keycloak**, an OIDC provider for authentication and authorization;
- **Rook**, for distributed (block) storage;
- **nginx**, as ingress controller;
- **Prometheus** and **AlertManager**, for monitoring and alerting;
- **Grafana**, as dashboard;
- **Private Docker registry**, to keep local the traffic required to download the VMs;
- **CoreDNS**, to resolve names into addresses within the cluster;
- **External DNS** (with bind9), to resolve external names into public IP addresses;
- **Cert-manager**, an HTTPS certificate management controller, which enables all the external traffic to land on the cluster via HTTPS;
- **NextCloud**, to provide a web-accessible persistent and shared disk;
- **NoVNC**, to connect to the remote desktop via browser.

In addition, we use **Slack** as collaborative platform for the CrownLabs team and to deliver monitoring summaries, statistics and alerts.

Finally, the usual mixture of `bash`, `ansible`, Docker, Python, Go and Javascript is used to create our glue logic.

More information is available on the [CrownLabs Infrastructure section](https://github.com/netgroup-polito/CrownLabs/tree/master/infrastructure) on GitHub.
