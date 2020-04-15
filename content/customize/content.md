+++
fragment = "content"
#disabled = true
date = "2020-04-15"
weight = 100
#background = ""
#title = "Customizing CrownLabs"
#subtitle = ""
+++

## Customizing CrownLabs

When you have a CrownLabs up and running, you should populate your setup with:
- Users (students, instructors)
- Courses (and the corresponding students and instructors)
- Virtual Machines

In this early phase of the project, CrownLabs does not have (yet) a GUI-based frontend to automate the above tasks.
A set of command-line scripts is available on the [GitHub repository](https://github.com/netgroup-polito/CrownLabs/tree/master/provisioning).

For example, an *empty VM*, based on Xubuntu and including all the software required by the system to operate (e.g., NoVNC) can be created with the [VM provisioning script](https://github.com/netgroup-polito/CrownLabs/tree/master/provisioning/virtual-machines).
Xubuntu has been chosen because of its inferior processing (CPU/memory) requirements compared to other Linux flavors, while still maintaining a pleasant look and feel; NoVNC (and companion software) is required to enable users to connect to their VMs using simply a web browser.

More details are available on the [Provisioning section](https://github.com/netgroup-polito/CrownLabs/tree/master/provisioning) of the GitHub repository.