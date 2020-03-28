+++
fragment = "hero"
#disabled = true
date = "2016-09-07"
weight = 50
background = "light" # can influence the text color
particles = true

title = "CrownLabs"
subtitle = "Crownlabs 4 ever!"

[header]
  image = "header.jpg"

[asset]
#  image = "logo.svg"
  width = "500px" # optional - will default to image width
  #height = "150px" # optional - will default to image height

#[[buttons]]
#  text = "Button"
#  url = "#"
#  color = "info" # primary, secondary, success, danger, warning, info, light, dark, link - default: primary
#
[[buttons]]
  text = "Github"
  url = "https://github.com/netgroup-polito/CrownLabs"
  color = "primary"

#[[buttons]]
#  text = "Button"
#  url = "#"
#  color = "success"
+++


CrownLabs is a set of services that enable to deliver of **remote computing labs** through **per-user virtual machines**.

Professors can provision a set of virtual machines, properly equipped with the software required for a given lab (e.g., compilers, simulation software, etc).
Each student can connect to its own set of (remote) virtual machines, simply through a browser.

Each student gets his own private environment without requiring to install any additional software but a simple Web browser.
Optionally, a student can share his remote desktop with his groupmates, enabling multiple students to complete their duties in a team.
Also professors can connect to the remote desktop of the student and interact with his virtual machines, e.g., in case some help is required.

Students have full control of the lifecycle of their VMs (e.g., start, stop, reboot). Access is secured and protected through encrypted sessions.
