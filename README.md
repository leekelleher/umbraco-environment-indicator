# Umbraco CMS Environment Indicator

[![Build status](https://img.shields.io/appveyor/ci/leekelleher/umbraco-environment-indicator.svg)](https://ci.appveyor.com/project/leekelleher/umbraco-environment-indicator)
[![NuGet release](https://img.shields.io/nuget/v/Our.Umbraco.CmsEnvironmentIndicator.svg)](https://www.nuget.org/packages/Our.Umbraco.CmsEnvironmentIndicator)
[![Our Umbraco project page](https://img.shields.io/badge/our-umbraco-orange.svg)](https://our.umbraco.org/projects/backoffice-extensions/cms-environment-indicator)


When developing websites using Umbraco in multi-environment solution, you can often get confused which environment you are currently looking at.

As a visual aid, this package will add a colour-coded indicator in the CMS back-office - this is applied to both the favicon (in the browser tab/title-bar) and adds a stripe to your avatar (in the top-left navigation).

![Environment Indicator](docs/environment-indicator.png)

This package was developed and tested against Umbraco v7+ on the [Umbraco-as-a-Service](https://www.umbraco.io) platform.

## Package installation

The package can be installed from either Our Umbraco or NuGet package repositories, or build manually from the source-code:

#### Our Umbraco package repository

To install from Our Umbraco, please download the package from:

> [http://our.umbraco.org/projects/backoffice-extensions/cms-environment-indicator](http://our.umbraco.org/projects/backoffice-extensions/cms-environment-indicator) 

#### NuGet package repository

To [install from NuGet](https://www.nuget.org/packages/Our.Umbraco.CmsEnvironmentIndicator), you can run the following command from within Visual Studio:

	PM> Install-Package Our.Umbraco.CmsEnvironmentIndicator

#### Manual build

If you prefer, you can compile the package yourself, you'll need:

* Visual Studio 2012 (or above)

To clone it locally click the "Clone in Windows" button above or run the following git commands.

	git clone https://github.com/leekelleher/umbraco-environment-indicator.git umbraco-environment-indicator
	cd umbraco-environment-indicator
	.\build.cmd

---

## Configuration

### Changing the colours

If you want to modify the default colours, you can do this by editing the `/App_Plugins/CmsEnvironmentIndicator/js/cms-environment-indicator.js` script.  You'll find a JavaScript array called `config`, there you can modify the existing colours and/or add new hostname/colour combinations.  The hostnames are defined as Regular Expressions, so don't forget to escape any dots, etc.

---

## Contributing to this project

For the majority of users this will be a "install and forget" package, but if you want to go further, here's the low down.

Anyone and everyone is welcome to contribute. Please take a moment to review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)

## Contact

Have a question?

* [CMS Environment Indicator Forum](https://our.umbraco.org/projects/backoffice-extensions/cms-environment-indicator/cms-environment-indicator-feedback/) on Our Umbraco
* [Raise an issue](https://github.com/leekelleher/umbraco-environment-indicator/issues) on GitHub


## Dev Team

* [Lee Kelleher](https://github.com/leekelleher)


## License

Copyright &copy; 2014 Umbrella Inc, Our Umbraco and [other contributors](https://github.com/leekelleher/umbraco-environment-indicator/graphs/contributors)

Licensed under the [MIT License](LICENSE.md)