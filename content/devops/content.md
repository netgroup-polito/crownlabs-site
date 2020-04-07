+++
fragment = "content"
#disabled = true
date = "2020-04-07"
weight = 100
#background = ""
#title = "Devops"
#subtitle = ""
+++

## Extending and Installing CrownLabs

CrownLabs is a rather complex piece of software, fully based on Kubernetes, which brings together multiple existing components coordinated with the required *glue logic*, written by the CrownLabs team.

**Extending** or **installing** CrownLabs requires rather solid knowledge about the Kubernetes world.

New extensions to CrownLabs may require to enrich both the backend and frontend glue logic.
With respect to the backend (Kubernetes), the glue logic comes as [Custom Resources (CRD)](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/), mainly written in GO language.
With respect to the frontent (web browser), the glue logic is oriented to present a minimal dashboard to students and instructors and it is mainly written in Javascript, exploiting the [React](https://reactjs.org/) library and the [Material-UI](https://material-ui.com/) components.

If you want to create your own CrownLabs instance, you have to install all the components with your own custom configuration files, which may largely depend upon your physical install.
A huge degree of customization is possible in this respect: pure data-link vs. BGP-based load balancing, the number (and capabilities) of your servers, the desired degree of high availability, integration with external authentication servers, creation of admin/user credentials, your own *secrets* to protect the internal communication among the components.
Do not expect to complete this task in a few hours; likely, you may need several days, or even more.


### Architecture overview

Although Kubernetes has been designed for containers and not for virtual machines, that platform has been chosen because is very scalable, has many built-in features (e.g., autoscaling), is extendible (CRDs), is more forward-looking, and features an incredible ecosystem of companion services.
And, last but not least, is *cool* and provides more *fun* to the CrownLabs team.

To deliver our services, we leverage several components in the Kubernetes ecosystem:
- **Kubevirt**, as virtualization platform;
- **MetalLB**, as (software) load balancer;
- **Keycloak**, an OIDC provider for authentication and authorization;
- **Rook**, for distributed (block) storage;
- **nginx**, as ingress controller;
- **Prometheus**, for monitoring and alerting;
- **Grafana**, as dashboard;
- **Private Docker registry**, to keep local the traffic required to download the VMs;
- **CoreDNS**, to resolve names into addresses within the cluster;
- **External DNS** (with bind9), to resolve external names into public IP addresses;
- **NextCloud**, to provide a web-accessible persistent and shared disk;
- **NoVNC**, to connect to the remote desktop via browser.

In addition, we use **Slack** as collaborative platform for the CrownLabs team and to deliver monitoring summaries, statistics and alerts.

Finally, the usual mixture of `bash`, `ansible`, Docker, Python, Go and Javascript is used to create our glue logic.
