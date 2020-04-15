+++
fragment = "content"
#disabled = true
date = "2020-04-07"
weight = 100
#background = ""
#title = "CrownLabs Users"
#subtitle = ""
+++

## What is CrownLabs?

CrownLabs is a set of services that can deliver **remote computing labs** through a **per-user virtual machine**.

Instructors can provision a set of virtual machines, properly equipped with the software required for a given lab (e.g., compilers, simulation software, etc).

Each student can connect to its own set of (remote) private environments without requiring any additional software, just a simple **Web browser**. No space problems on the student hard disk, no troubles in setting up the environment required to support multiple subjects on the same machine, and more.

In addition, each student can **share** his remote desktop with his groupmates, enabling multiple students to complete their labs in a team.

Finally, CrownLabs **supports also instructors**, who can connect to the remote desktop of the student and play directly with his environment, e.g., in case some help is required.

Students have full control of the lifecycle of their remote desktops (e.g., create, rebuild, destroy), enabling to re-create a **clean environment** when needed.

In addition, a **persistent disk** is dynamically mounted which allows student to save their data, even across reboots.
**Shared folders** can be created involving students and instructors.
**Industry standards** (web interface, [WebDAV](https://en.wikipedia.org/wiki/WebDAV)) are available to get access to the persistent disk.

Access is **secured** and communication is protected through **encrypted sessions**.


### Is CrownLabs just a Remote Desktop?

Well, in principle CrownLabs provides a Remote Desktop.

However, CrownLabs has been created with teaching purposes in mind.
If you look at all the features of CrownLabs, you can easily spot the differences:
- support for group work;
- support for multiple people (students, instructors) interacting at the same time;
- support for multiple environment, each one targeting a given lab (e.g., programming is different from networking);
- can restore a *clean* environment whenever needed.

If you are just curious, ask for an [evaluation account](/contact) and try yourself!
