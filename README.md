# CrownLabs website

The website is created with Hugo, using the [Syna](https://themes.gohugo.io/theme/syna/) theme.
Note: the theme is imported as a git submodule, in order to simplify its update when new versions are released.

## Prerequisites
- [Install Go](https://golang.org/doc/install).
- [Install Hugo](https://gohugo.io/getting-started/installing/).

You may have to define some environment variables to allow Hugo to work (e.g., `source ./profile` in case those variables have been added to the `.profile` file).

## Usage

To start your website run the following commands:

**Development**:
```
# This command starts the Hugo server and watches the site directory for changes.
$ hugo server -D
```

To see your website, simply connect to [http://localhost:1313/](http://localhost:1313/).


**Production**:
```
# This command generates the static website in the public/ directory.
# If you do not have a site, then it gives errors about missing layout files.
$ hugo
```
