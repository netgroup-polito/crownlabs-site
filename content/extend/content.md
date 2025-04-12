+++
fragment = "content"
#disabled = true
date = "2020-04-15"
weight = 100
#background = ""
#title = "Extending"
#subtitle = ""
+++

## Extending CrownLabs

While the [CrownLabs infrastructure](/deploy) is rather complex, the amount of *glue logic* that has been developed and that is required to coordinate all the components toghether, is surprisingly limited and, in some respect, simple.

This provides a nice background for **Computer Engineering students**, who can use the CrownLabs platform as a playground (**1**) to enrich their coding skills, (**2**) to work in team with modern collaboration tools, and (**3**) to learn how to dominate the new world of cloud computing.

In addition, students can also practice with Continuous Integration and Continuous Delivery (**CI/CD**) in order to control and automate the testing and the deployment of newer (or updated) services.

New extensions to CrownLabs services may require to enrich both the backend and frontend glue logic.

With respect to the backend (Kubernetes), the glue logic comes as [Custom Resources (CRD)](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/), mainly written in GO language.
Extending the platform may require to create new Kubernetes operators implementing the desired services.

With respect to the frontend (web browser), the glue logic is oriented to present a minimal dashboard to students and instructors and it is mainly written in TypeScript, exploiting the [React](https://reactjs.org/) library and [Antd](https://ant.design/) components.
In this case, extending the platform may require to create the proper TypeScript front-end that interfaces with the new Kubernetes operators mentioned above.

More information is available on GitHub, in the sections dedicated to the CrownLabs [Operators](https://github.com/netgroup-polito/CrownLabs/tree/master/operators) and [Web frontend](https://github.com/netgroup-polito/CrownLabs/tree/master/webservice).

Students willing to complement their knowledge with practice are very welcome: [contact us](/contact)!
