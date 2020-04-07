# CrownLabs website

The website is created with Hugo, using the [Syna](https://themes.gohugo.io/theme/syna/) theme.

## Prerequisites
- [Install Git](https://git-scm.com/downloads).
- [Install Go](https://golang.org/doc/install).
- [Install Hugo](https://gohugo.io/getting-started/installing/). Depending on your system, this might require Scoop, Choclatey, or other software.


## Installation

To start using this starter you need to clone or download this repository and update it's git submodules (Syna theme is added as a submodule).

```
git clone https://git.okkur.org/syna-start project-name && cd project-name
git submodule init
git submodule update
```

## Usage

To start your website run the following commands:

**Development**:
```
$ hugo server -D # This command starts the Hugo server and watches the site directory for changes.
```

To see your website, simply connect to [http://localhost:1313/](http://localhost:1313/).


**Production**:
```
$ hugo # This command generates the static website in the public/ directory. If you do not have a site, then it gives errors about missing layout files.
```
