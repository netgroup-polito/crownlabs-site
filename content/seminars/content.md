+++
headless = true
fragment = "content"
date = "2023-01-07"
weight = 100
#title = "Seminars and Events"
+++


## Seminars and Events
This page lists events and seminars organized by the CrownLabs community.

For upcoming seminars, use the following [Zoom call link](https://polito-it.zoom.us/j/93120057836) (passcode 429974).

Past seminars are available [below](#past); available recordings can be found on the [CrownLabs Seminar playlist](https://www.youtube.com/playlist?list=PLTAfidx4guQKksw0DmT_9s9sVqslHjpso) on Youtube.

<br>

## Upcoming seminars
<!--
No upcoming seminars are scheduled. We are going to take a short vacation (actually, exams) break.
See you in the next semester!
-->
<!--
Here there are the seminars currently planned.
<br>
<hr>
-->

Upcoming seminars will be announced soon. Stay tuned!

<!--
<br>
Place new seminars here
-->

<br>
<hr>

## <a name="past">Past seminars</a>
Recordings of some of the past seminars are available on the [CrownLabs Seminars](https://www.youtube.com/playlist?list=PLTAfidx4guQKksw0DmT_9s9sVqslHjpso) playlist on Youtube.

<br>
<hr>


### Infrastructure self-provisioning to speed-up cloud adoption
- Speaker: Riccardo Di Marino, [Storm Reply](https://www.reply.com/storm-reply/)
- When: Tuesday, Jan 10, 2022, 10.00 - 11.00
<!--
- [Recorded video](https://youtu.be/WN2GOPrC5jA)
-->

#### Abstract
As many organizations are facing their digital transformation, the new cloud operating model assumes the use of standardized and compliant products, as well as their timely delivery to application teams.
In this seminar we show a solution based on a Cloud Service Catalog, using the infrastructure as a code (IaC) paradigm, together with configuration management and automation tools, to create a Self Service portal, where each application team can provision in a self service fashion the infrastructure components.
The components configuration and the end to end delivery, within the Cloud Service Catalog, shall be automated, so that they guarantee by design the compliance with enterprise standards, in terms of security policy, network placement and configuration parameters (tags, allocation, sizing) In the final part, the services involved in the solution will be shown, through an hands-on session performed on the AWS console.


#### Short bio
**Riccardo Di Marino**  is a cloud engineer and solutions architect at Storm Reply, the Reply company focused on solutions based on Amazon Web Services. He joined the company in January 2022, which is focused mainly on helping enterprises to apply an effective digital transformation, through the migration to the cloud.
Riccardo got his master’s degree in Communications and Computer Networks Engineering at Politecnico di Torino, and then continued his studies pursuing the second edition of the 2nd level specializing master in Artificial Intelligence & Cloud, concluded in December 2022 at Politecnico di Torino.

<br>
<hr>


### Introducing the Gateway API, the next generation of Ingress API
- Speaker: Mattia Lavacca, [Kong](https://konghq.com/)
- When: Tuesday, Dec 13, 2022, 11.30 - 13.00
- [Recorded video](https://youtu.be/WN2GOPrC5jA)

#### Abstract
Gateway API is the next generation of the Ingress API and is where new features will be added. We will explore the rich set of features provided by this API and deep dive into a tutorial session where we will learn how to expose applications outside the cluster boundaries. We will eventually perform traffic splitting and Load Balancing based on several rules. During the tutorial, we will leverage the Kong Gateway Operator, which offers an operator approach to create controlplanes and dataplanes upon Gateway creation, jointly with Kong as a dataplane and the Kong Ingress Controller as a controlplane.

#### Short bio
**Mattia Lavacca** is a software engineer at Kong, deeply involved in Kubernetes networking. He is an active contributor to the Gateway API and is working on many Kong projects related to networking in Kubernetes, such as the Ingress controller and the Gateway Operator. In addition, he has been quite involved in the last years in the open-source community, contributing, among others, to Liqo, an open-source project related to resource sharing in multi-cluster environments.

<br>
<hr>

### eBPF and Code Portability
- Speaker: Mauricio Vásquez Bernal, [Microsoft](https://www.microsoft.com/)
- When: Tuesday, May 24, 2022, 11.00 - 12.00
- [Recorded video](https://youtu.be/lMKA0C9Y0GU)

#### Abstract
Portability is one of the potential advantages of the eBPF technology. However, this requires the code recompilation on the target machine, which is not always possible. This talk will present the problem about code portability in eBPF and the main solutions that exist so far, namely CO-RE, and additional tools such as BTFHub and BTFGen.

#### Short bio
**Mauricio Vásquez Bernal** is software engineer at Microsoft, thanks to the recent acquisition of his previous company, Kinvolk. He is currently participating to the development of OpenTelemetry, a distributed tracing and metrics system. In the past he was research assistant at Politecnico di Torino, where he worked on the design and the implementation of high performance network function with eBPF (extended Berkley Packet Filter) and XDP (eXpress Data Path) technologies. He was one of the main developers of Polycube, an open source software framework that provides fast and lightweight network functions. Mauricio got his BSc in Electronic Engineering at University of Antioquia, Colombia and then the MSc in Computer Engineering from Politecnico di Torino in 2015. Besides his work, he is an amateur MTB and road cyclist, he enjoys participating in amateur races.

<br>
<hr>

### Monitoring on Kubernetes: Prometheus Hands-on
- Speaker: Marco Schiapparelli, [Blue Reply](https://www.reply.com/blue-reply/it/)
- When: Tuesday, Jan 18, 2022, 14.30 - 16.00
- [Recorded video](https://youtu.be/EaODJkFjYrA)

#### Abstract
Observability is a key pillar of modern cloud native architecture and services. One of the key component is Prometheus, which is in charge of gathering and enabling further analysis on multiple data sources, hence providing full visibility across the entire datacenter.
This seminar will briefly present what is Prometheus, how it can be installed and operated on a Kubernetes cluster, and an hands-on showing how Prometheus can be used to solve a real problem.

#### Short bio
**Marco Schiapparelli** got his master’s degree in Computer Engineering at Politecnico di Torino. He is a DevOps and Hybrid Cloud engineer at Blue Reply. His professional experience include Cloud, Multi-Cloud and Hybrid Cloud infrastructures, often based on Kubernetes clusters and Docker containers.
Over the years he has been developing projects and services in fields as Infrastructure Automation (IaC, GitOps) and Applicative Automation (i.e. DevOps and SDLC), using Open-Source software and also collaborating with IBM and Red Hat as technology partners.

<br>
<hr>

### Building and operating the CrownLabs service: architecture and lessons learned
- Speaker: Marco Iorio, [Politecnico di Torino](https://www.polito.it/)
- When: Tuesday, Jan 11, 2022, 10.00 - 12.00
- [Recorded video](https://youtu.be/WIHZiNR59Z8)

#### Abstract
CrownLabs is an open-source project started in March 2020 at Politecnico di Torino to deliver remote computing laboratories.
Since then, it has been leveraged with satisfaction by the students of more than ten courses, including Cloud Computing, Software Networking, Computer Networks, and Computer Animation, just to cite a few.
CrownLabs also successfully hosted the September session of the Computer Science (first year course) exams, featuring the integration with the official "exams" platform at PoliTO.
This seminar presents the CrownLabs architecture and infrastructural setup, mainly addressing the following aspects:
- The motivations and the design of the Kubernetes-powered application back-end;
- The provisioning of user environments: VMs vs containers;
- The design and evolution of the CrownLabs frontend;
- The architectural overview of the Kubernetes-based infrastructure;
- The lessons learned while operating the service.

#### Short bio
**Marco Iorio** is a Ph.D student at Politecnico di Torino, where he previously received his M.Sc degree in computer engineering.
His research interests include multi-cloud systems, edge/fog computing and cyber-security applied to vehicular networks.
Marco is one of the founding members of the CrownLabs team. Since then, he has been involved in the design and development of the project, serving as tutor of several course projects, as well as he is in charge of operating the CrownLabs infrastructure.

<br>
<hr>

### Connecting to Google: how Google handles its external and internal connectivity
- Speaker: Francesco Marabotto, [Google](https://www.google.com/)
- When: Monday, Jan 10, 2022, 11.30 - 13.00

#### Abstract
This seminar will provide context on how wide-area network design is used to meet the business needs of a company that provides services to their customers.
With latency and availability requirements becoming more important, we will discuss why the Edge is such an important part of a network and what are the challenges encountered when designing it.
The focus of the talk will be Google's answer to these challenges: the Espresso ecosystem, an SDN programmable edge network that serves the majority of Google's traffic while keeping costs down.

#### Short bio
**Francesco Marabotto** is a Tech Lead for the Edge production network of Google.
He leads the technical direction of a group ensuring that the network can meet the requirements of availability, reliability and performance.
He joined Google in 2015 as a network technician working on the Edge, Core and SDN data center network.
Before Google, Francesco has worked in Cisco as a technical support engineer and has then moved to consulting and finally to an escalation engineering position in a product team in charge of data center L3 switches.
Francesco holds a MSc in Computer Engineering from Politecnico di Torino.

<br>
<hr>

### Serverless Event-Driven on AWS Cloud: real stories
- Speakers: Felice Tartaro and Girolamo Piccinni, [Storm Reply](https://www.reply.com/storm-reply/)
- When: Tuesday, Dec 21, 2021, 10.00 - 11.30
- [Recorded video](https://youtu.be/4vgfWscRVTU)

#### Abstract
Several enterprise workloads problems can be solved with event-driven architectures. However, dealing with largely distributed and loosely coupled services might be challenging.
This seminar presents how to correctly design event-driven and serverless applications on cloud using real customer stories and is structured as follows:
- Serverless short introduction
- Enterprise integration patterns & Event Driven Architectures
- Customer stories

#### Short bio
**Felice Tartaro** joined Reply in 2002 after a Master’s Degree at Politecnico di Torino. After 7 years as Developer and Solution Architect he started working on building a private cloud solution for internal use in Reply. He joined Storm Reply in 2012 and now he is an Associate Partner with responsibilities on Automation, MSP and Cloud Native application practices.<br>
**Girolamo Piccinni**, a former student of Politecnico di Torino and Eurecom, joined Reply in 2012 working on AWS Cloud Technologies since then. He is now Manager at Storm Reply working on enterprise evolution on cloud to address IoT and high-throughput workloads via modern application patterns on Cloud.

<br>
<hr>

### Cloud outsourcing strategy
- Speaker: Jorge Monge, [Management Solutions](https://www.managementsolutions.com)
- When: Wednesday, Dec 15, 2021, 10.00 - 11.30
- [Recorded video](https://youtu.be/z3IT_Jw4r8g)

#### Abstract
Il seminario ha come obiettivo condividere tutte le attività complementari e propedeutiche alla definizione della strategia go-to-cloud di un’azienda:
- Identificazione delle esigenze tecnologiche;
- Definizione dei requisiti del modello To-Be;
- Gestione dello scouting e della selezione del fornitore;
- Analisi degli impatti normativi;
- Identificazione e gestione dei rischi associati al progetto di implementazione della nuova soluzione;
- Definizione degli indicatori e monitoraggio del progetto.

#### Short bio
**Jorge Monge** è CISO e Partner responsabile della core competence di Tecnologia presso Management Solutions. Laureato in Computer Engineering presso l’Universidad di Deusto (Spagna), è inoltre in possesso del titolo Financial Risk Manager (FRM) di GARP. Durante la sua carriera ha partecipato in progetti di consulenza con una forte componente IT presso i principali player del settore Finanziario, Assicurativo, Energetico e delle Telecomunicazioni in tutta Europa ma anche negli Stati Uniti e in America Latina.

<br>
<hr>

### API Management in Hybrid Cloud scenarios
- Speaker: Francesco Semeraro, [Cluster Azure Reply](https://www.reply.com/cluster-reply/)
- When: Tuesday, Dec 14, 2021, 10.00 - 11.30
- [Recorded video](https://youtu.be/0mSbfpS_9yY)

#### Abstract
As many organizations move to a digital enterprise model in which more and more data is exposed via APIs, an API management technology is required to alleviate the effort of maintaining multiple APIs that are produced and published within the company.
API administration technologies need to support hybrid scenarios, in which some portions of the platform are cloud-based, while others are still on-premise.
This seminar will analyse the advantages of setting up an hybrid API management solution and it will present a Proof-of-Concept (PoC) implementation based on Azure API management.
Finally, an hands-on session will explore all the components involved in an hybrid API management solution from the Azure portal to the on-premise Kubernetes cluster.

#### Short Bio
**Francesco Semeraro** is a cloud engineer and solutions architect at Cluster Azure Reply, the Reply company focused on solutions based on Microsoft Azure. These include cloud, multi-cloud and hybrid cloud infrastructures, often based on Kubernetes clusters and Docker containers.
Francesco got his master's degree in Computer Science and Engineering at Politecnico di Milano, and then continued his studies pursuing a 2nd level master's degree in Artificial intelligence and Cloud at Politecnico di Torino.

<br>
<hr>

### Pricing models on public cloud providers
- Speaker: Federico Cicchiello, [Politecnico di Torino](https://www.polito.it/)
- When: Friday, Dec 10, 2021, 8.30 - 10.00
- [Recorded video](https://youtu.be/GOcRsNC4or8)

#### Abstract
While public cloud is increasingly used, it is not always clear their cost model, as well as the different cost options available to customers.
This seminar will address the following questions:
- How much public cloud providers charge for their services?
- What are the costs of having a virtual Kubernetes cluster?
- What is the impact of each pricing component on the overall infrastructure cost?

The seminar will also present the pricing models of VMs, containers and block storage services as well as the main networking-related costs of the major public cloud providers (AWS, GCP and Azure), as well as the cluster provisioning modes and the related cost models for Kubernetes services.
Finally, the seminar will present some considerations on the relative weight of each pricing components through a cost simulation.

#### Short bio
**Federico Cicchiello** is a student in the Master Degree on Computer Engineering at Politecnico di Torino, with a graduation thesis focusing on analysis, modeling and implementation of cost models for a multi-cloud Kubernetes scenario.

<br>
<hr>

### Cloud Security & Going Serverless on AWS
- Speaker: Luigi Napoleone Capasso, [Amazon](https://www.amazon.com/)
- When: Wednesday, Nov 24, 2021, 10.00 - 11.30

#### Abstract
Cloud Security is the protection of data stored online via Cloud Computing platforms from theft, leakage, and deletion.
Serverless is a cloud-native development model that allows developers to build and run applications without having to manage any server, neither physical, nor virtual.
The seminar aims to dig deeper into the two above concepts, showing how simple is going serverless on AWS and how to prevent security threats in the Cloud.
An hands-on will be taking place, and the most famous AWS serverless services will be used.

#### Short bio
**Luigi Napoleone Capasso** is a Cloud Support Engineer at Amazon Web Services (AWS) in Dublin. He is currently working to help AWS Customers to properly use AWS Cloud services and help fixing their issues. His expertises include computer networking, software design, management and the development and implementation of software solutions. He got a Master's Degree at Politecnico di Torino in 2020 in Computer Networking.

<br>
<hr>

### Enterprise architectures in Financial institutions: High Availability and Disaster Recovery
- Speaker: Marcello Bianchetti, [Unicredit Services](https://www.unicreditgroup.eu/en/microsites/unicreditservices.html)
- When: Wednesday, Nov 4, 2021, 16.00 - 17.30

#### Abstract
Il seminario si focalizzerà sui seguenti argomenti:
- Requisiti regolamentari che guidano il disegno delle Architetture ICT nel mondo Bancario a livello Italiano ed Europeo;
- Standards di RTO e RPO per Banche sistemiche e non;
- Sfide e soluzioni tecniche utilizzate per implementare i pattern di HA (High Availability) e di DR (Disaster Recovery) a vario livello dello stack tecnologico (storage, virtualization, database, containers, ecc.);
- Differenze di approccio nei disegni architetturali tra on-prem e on-cloud;
- Come le applicazioni e le architetture Cloud Native cambiano i pattern di HA e DR.

#### Short bio
**Marcello Bianchetti** is Head of CIB Architectures at UniCredit Services, Milan.
He obtained a degree in Computer Engineering at Politecnico di Milano and he is now in charge of the cloud and computing architectures for the entire Unicredit group, the second banking group in Italy and one of the largest in Europe.

<br>
<hr>

### Distributed Services at the Network Edge: Motivations, Opportunities, Technology
- Speaker: Mario Baldi, [Pensando Systems](https://www.pensando.io/)
- When: Monday, June 7, 2021, 17.30 - 19.00
- [Recorded video](https://youtu.be/mVYdQvvGQ8c)

#### Abstract
Network and security services have traditionally been deployed in front of a group of end hosts that share some common function and are topologically close: e.g., private corporate clients, public corporate servers, the servers of a specific department, the hosts of a corporate branch. With virtualization, while the same logical model still applies, the physical placement of the hosts, their physical proximity, and the natural point to deploy the service application (on the shortest path of traffic to and from the served hosts) have disappeared. Hence, this model of implementing services in a centralized fashion, can no longer be effectively applied.

At the same time, the cloud paradigm has moved all the intelligence of the network at the edge, leaving mere layer 3 connectivity to the core of the network (the so called underlay). This contributes to making the network edge a natural candidate location where to implement services.

This paradigm shift is the focus of this seminar. We start with looking into the motivations for and advantages of implementing complex network, storage and security services at the network edge, and the new opportunities this creates. In this context, we look into a platform developed by Pensando Systems, Inc. to support the execution of such services in a distributed fashion on a PCIe-attached Distributed Services Card (DSC). We analize the architecture of the ASIC that powers the DSC to see how, in order to best address this novel deployment scenario, it was designed to be fully programmable, with both domain specific and general purpose processing capability. A few use cases will be used to validate such architecture.

#### Short bio
**Mario Baldi** is Distinguished Technologist at Pensando Systems, Milpitas, CA, USA and Associate Professor of Information Processing Systems (on leave) at Politecnico di Torino, Italy. He has held various positions in startup and established companies in the computer networking industry, as well as several visiting professorships at Universities in four continents, during over 25 years of professional involvement in the computer networking domain. More information on his personal website, [www.baldi.info](http://www.baldi.info).

<br>
<hr>

### Multi-cloud, edge and distributed cloud
- Speaker: Guido Vicino, [Blue Reply](https://www.reply.it/)
- When: Monday, May 24, 2021, 17.30 - 19.00
- [Recorded video](https://youtu.be/kjBzfJjrFcE)

#### Abstract
This talk will present an overview of the latest multi-cloud technologies.
Starting from the definition of multi-cloud, the talk will include:
- How to integrate and manage different Cloud services
- Micro-services, docker containers and related platforms
- Concrete examples of a viable Multi-Cloud strategy
- Types of deployment and reference architectures
- How to manage and govern the integration between various components

#### Short bio
**Guido Vicino** is Senior Manager at Blue Reply, coordinating Cloud and DevOps Engineers to design and implement multi-cloud solutions, in particular with respect to Infrastructure Automation (IaC, GitOps) and Applicative Automation (i.e. DevOps and SDLC). Over the years he has been developing projects and services in fields as infrastructure and security, using Open-Source software and also collaborating with technology partners as IBM, Red Hat, Dynatrace and Splunk.

<br>
<hr>

### An Hands-on Journey with Amazon AWS
- Speaker: Luigi Napoleone Capasso, [Amazon](https://www.amazon.com/)
- When: Monday, May 17, 2021, 17.30 - 19.00

#### Abstract
This talk will present an overview of the Amazon AWS Cloud infrastructure, and why Cloud solutions are preferred over the traditional ones.
A brief hands-on with two of the most popular AWS services is then presented. In particular, Amazon VPC and Amazon EC2 will be used to stress the concepts of availability and agility.

#### Short bio
**Luigi Napoleone Capasso** is a Cloud Support Engineer at Amazon Web Services (AWS) in Dublin. He is currently working to help AWS Customers to properly use AWS Cloud services and help fixing their issues. His expertises include computer networking, software design, management and the development and implementation of software solutions. He got a Master's Degree at Politecnico di Torino in 2020 in Computer Networking.

<br>
<hr>

### Open-source e innovazione digitale: un approccio sostenibile e scalabile
- Speaker: Luca Marchino, [Labinf Sistemi](https://www.labinfsistemi.com/)
- When: Monday, May 10, 2021, 17.30 - 19.00
- [Recorded video](https://youtu.be/KNLlqDzRidw)

#### Abstract
Il software open source, progettato per essere accessibile pubblicamente, viene sviluppato con un approccio decentralizzato e collaborativo di professionisti IT e community. Il risultato è una soluzione flessibile, longeva e di qualità. L'approccio open source incoraggia la collaborazione e il contributo di ognuno, per realizzare soluzioni efficaci nei confronti di sfide complesse e in contesti di forte cambiamento.
Come può essere sostenibile, in azienda o per la didattica, l’adozione di soluzioni open source?

#### Short bio
**Luca Marchino** è Delivery Manager e Product Manager di iDempiere ERP - Labinf Sistemi, nonchè Presidente e Cofondatore di ERP Open Source Italia.
Si è laureato in Ingegneria Gestionale presso il Politecnico di Torino. Appassionato di tecnologia, si avvicina al mondo dell'open source nel 2006. Nel 2008 fonda la startup Freepath che ha come obiettivo quello di promuovere i progetti open source, parafrasando la celebre frase di Henry Ford "C'è vero progresso solo quando i vantaggi di una nuova tecnologia diventano per tutti".
Nel 2014 la startup che ha fondato entra far parte del gruppo Labinf Sistemi, di cui è Product Manager e Project Manager dei progetti open source.

<br>
<hr>

### The life of a Cloud Security Researcher: how to exploit a cloud environment
- Speaker: Stefano Chierici, [Sysdig](https://sysdig.com/)
- When: Monday, May 3, 2021, 17.30 - 18.30
- [Recorded video](https://youtu.be/JS7YB8pXddU)

#### Abstract
Security has always been a challenge for all the companies also on-premises, but cloud-native services raises the bar. Containers offer more virtualization layers to hide an attack and Cloud removed the physical barrier increasing the misconfigurations impact. This talk will make it concrete and try a real cloud attack.
What we will do together:
 1. Identify an entrypoint
 2. Lateral Movement in the cloud
 3. Cloud Privilege Escalation
 4. Detect the intrusion

#### Short bio
**Stefano Chierici** is a security researcher in Sysdig where his research focuses on defending containerized environments and cloud environments from attacks ranging from web to kernel. Stefano is one of the Falco contributors, an incubation level CNCF project. He studied cyber security in Italy and, before joining Sysdig, he was a pentester and obtained the OSCP Certification in 2019. He was a security engineer and a red team member.

<br>
<hr>

### Data pipeline orchestration via Apache Airflow
- Speaker: Matteo Senardi, [Docsity](https://www.docsity.com/)
- When: Monday, Apr 26, 2021, 17.30 - 19.00
- [Recorded video](https://youtu.be/sLjelsSjZ_w)

#### Abstract
Docsity is social learning network for students and professionals worldwide, where it is possible to share and download study material.
In Docsity we have millions of users coming every month that are engaged with the platform, with tens of millions interactions to be tracked.
The exciting challenge for the Docsity data team is to create a process that allows to collect, store and activate millions of clickstreams day by day.
In Docsity we created a custom build from Docker Compose with Google Cloud Build CI/CD process to deploy new versions of Apache Airflow (an open source platform widely used to design and control data pipeline) with Google Compute Engine every time a commit is pushed on the production branch.
This talk will present how we automated the entire workflow, hence achieving a timely update of our software while keeping the entire solution stateless.

#### Short bio
**Matteo Senardi** is the Head of Data of Docsity, where he leads the team responsible for all data chain, from collection on real time clickstream, to transformations and normalizations in order to feed the data lake in Google BigQuery. This includes the datasets definitions and gathering, the development of data-pipelines or the science of making it work and their deployment in production with CI/CD.
He graduated as computer engineering in Modena. After the degree, he started working with data in the R&D department of Webranking, a digital marketing agency. He moved later to Mediaset as a senior data engineer, and then he joined Docsity.
He designs and maintains several open source projects in his [GitHub](https://github.com/pualien) account, which are currently used in production environments.

<br>
<hr>

### Multicloud Infrastructure as Code on Tencent China: Issues and best practice
- Speaker: Pasquale Lepera, [Criticalcase](https://www.criticalcase.com/)
- When: Monday, February 22, 2021, 17.00 - 18.30
- [Recorded video](https://youtu.be/HRlWgnlBCGQ)


#### Abstract
Based on a real use case for a big player of the fashion industry, this sebinar will focus on:
1) Cloud environment with global diffusion (China related issues). DEMO (Tencent Cloud)
2) How to structure and launch an IaC terraform project. DEMO
3) How to exploit the multicloud (lamba and S3). DEMO
4) Secure the access: Bastion host. DEMO
5) How could this kind of project evolve by integrating into a DevOps.

#### Short bio
**Pasquale Lepera** is a Senior Cloud Architect and Delivery Manager in Criticalcase. He got 17 years of experience in the IT field working for small and multinational company. During his career he Pasquale covered many roles like: System Engineer, IT Manager, Project Manager, DevOps Engineer, Solution Architect, Cloud Architect and Delivery Manager. Pasquale holds a Master Degree in Telecommunication Engineering from Universita’ di Pisa (2004).

<br>
<hr>

### Design and implementation of a data center network with a layer 2 extension
- Speaker: Francesco Marabotto, [Google](https://www.google.com/)
- When: Monday, Feb 8, 2021, 11.00 - 12.30

#### Abstract
Data centers are the locations where the real asset of an enterprise is stored: data.
All of the internet and most is served from a data center and most organizations rely on them to achieve their purposes.
A data center network needs to be engineered based on the services and applications requirements creating a unique design that is specific to a use case.
In this seminar I'm going to describe a scalable and reliable network suited for a large enterprise, bridging the gap between networking theory and practical implementation using real world examples of devices, features and configurations.

#### Short bio
**Francesco Marabotto** is a Tech Lead for the Edge production network of Google.
He leads the technical direction of a group ensuring that the network can meet the requirements of availability, reliability and performance.
He joined Google in 2015 as a network technician working on the Edge, Core and SDN data center network.
Before Google, Francesco has worked in Cisco as a technical support engineer and has then moved to consulting and finally to an escalation engineering position in a product team in charge of data center L3 switches.
Francesco holds a MSc in Computer Engineering from Politecnico di Torino.

<br>
<hr>

### Wireless deployment and technologies
- Speaker: Stefano Ferrari, [Cisco](https://www.cisco.com/)
- When: Monday, Jan 18, 2021, 9.30 - 11.00am

#### Abstract
Globally, wireless devices will account for 43% of all networked devices by 2022. At the same time, the number of IoT M2M devices will account for 51% of all networked devices by 2022, with the vast majority being wirelessly connected. Wireless is the new switching. In this seminar, we will cover most typical wireless deployments, we will learn that wireless is not just about access and will glance through the most recent industry trends.

#### Short bio
**Stefano Ferrari** is a senior manager of engineering at Cisco Systems, leading a group focused on wireless technologies and new generation networking operating systems. He joined Cisco in 2009 as software engineer working in service provider, enterprise and IOT industrial technologies. Before Cisco, Stefano worked as consultant. Stefano holds a MSc in Software Engineering from Politecnico di Torino (2009) and Eurecom (2008).
