# Umbraco CMS Environment Indicator

When developing websites using Umbraco in multi-environment solution, you can often get confused which environment you are currently looking at.

As a visual aid, this package will add a colour-coded indicator in the CMS back-office - this is applied to both the favicon (in the browser tab/title-bar) and adds a stripe to your avatar (in the top-left navigation).

![Environment Indicator](docs/environment-indicator.png)

This package was developed and tested against Umbraco v7+ on the [Umbraco-as-a-Service](https://www.umbraco.io) platform.

## Package installation

The package can be downloaded and installed from the Our Umbraco package repositories

http://our.umbraco.org/projects/backoffice-extensions/cms-environment-indicator

## Changing the colours

If you want to modify the default colours, you can do this by editing the `/App_Plugins/CmsEnvironmentIndicator/js/cms-environment-indicator.js` script.  You'll find a JavaScript array called `config`, there you can modify the existing colours and/or add new hostname/colour combinations.  The hostnames are defined as Regular Expressions, so don't forget to escape any dots, etc.

---

## Contributing to this project

For the majority of users this will be a "install and forget" package, but if you want to go further, here's the low down.

Anyone and everyone is welcome to contribute. Please take a moment to review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)


### Manual build

To build the Umbraco package, run the `build.cmd` script in the root of the project folder.
