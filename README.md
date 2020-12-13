# CrownLabs website

The website is created with Hugo, using the [Syna](https://themes.gohugo.io/theme/syna/) theme.
Note: the theme is imported as a git submodule, in order to simplify its update when new versions are released.

## Prerequisites
You need to install Git, Go, and Hugo.
On Ubuntu 20.04 LTS all the above packages can be installed with:
```
# Update the package list, so we're sure to install the latest version
$ sudo apt update

# Install the required packages
$ sudo apt install git golang hugo
```

On other platforms, you may have to follow the above instructions
- Install Git (this is usually included in your package manager)
- [Install Go](https://golang.org/doc/install).
- [Install Hugo](https://gohugo.io/getting-started/installing/).

You may have to define some environment variables to allow Hugo to work (e.g., `source ./profile` in case those variables have been added to the `.profile` file).

## Setting up the repository
The setup of this website on your local hard-disk (e.g., for testing) requires the following steps:
```
# Clone the current repository
$ git clone https://github.com/netgroup-polito/crownlabs-site/

# Move to the cloned folder
$ cd crownlabs-site

# Update the Syna submodule
$ git submodule update --init --recursive
```

## Usage

To start your website run the following commands:

**Development**:
```
# Start the Hugo server; this command will also watch the site directory for changes
$ hugo server -D
```

To see your website, simply connect to [http://localhost:1313/](http://localhost:1313/).


**Production**:
```
# This command generates the static website in the public/ directory.
# If you do not have a site, then it gives errors about missing layout files.
$ hugo
```
