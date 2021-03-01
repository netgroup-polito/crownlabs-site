+++
fragment = "content"
#disabled = true
date = "2021-02-24"
weight = 100
#background = ""
#title = "Customizing CrownLabs"
#subtitle = ""
+++

## Customizing CrownLabs

When you have a CrownLabs up and running, you should populate your setup with:
- Users (students, instructors)
- Courses (and the associated students and instructors)
- Virtual Machines

While users and courses can be created through the GUI, the [Guide for creating and uploading VMs in CrownLabs](https://github.com/netgroup-polito/CrownLabs/tree/master/provisioning/virtual-machines) presents the procedure (not yet fully automated) to create new Virtual Machine images for CrownLabs.

In particular, the above section presents the procedure to create an *empty VM*, based on Xubuntu and including all the software required by the system to operate (e.g., NoVNC), as well as all the other VMs that have been used in our University.
Xubuntu has been chosen because of its inferior processing (CPU/memory) requirements compared to other Linux flavors, while still maintaining a pleasant look and feel; NoVNC (and companion software) is required to enable users to connect to their VMs using simply a web browser.

More details are available on the [provisioning section](https://github.com/netgroup-polito/CrownLabs/tree/master/provisioning) of the GitHub repository, such as how to create Docker-based GUI applications instead of full-fledged VMs.


