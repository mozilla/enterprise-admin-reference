---
title: Getting started with Firefox for your enterprise browser
description: Learn how to deploy, configure, and manage Firefox or Firefox ESR for your organization.
sidebar:
  label: Getting started
  order: 1
---

This document describes the basic steps needed to deploy Firefox as an enterprise browser, from choosing a release channel, download, deployment, and configuration.
It provides a high-level overview for getting Firefox installed and managed across your organization, whether you're using Windows, macOS, or Linux.

## Choose a release channel

Consider which release channel is appropriate before downloading and deploying Firefox.
There are two recommended release channels for enterprise purposes:

- **Firefox:** The stable release channel has major version released every four weeks, which include the latest features and fixes.
- **Firefox Extended Support Release (ESR):** The ESR channel is a long-term support channel branched once per year from the latest major Firefox release.
  Security and stability updates are backported as minor and patch versions during the release's lifecycle.

If you prefer faster feature delivery, use the standard **Firefox** release.
If your organization needs stability, **Firefox ESR** is recommended.
See [Firefox and Firefox Extended Support Release (ESR)](guides/firefox-channels/) for more information.

## Download Firefox for your platform

Choose the installers for the environments that you are deploying to.
Available installers are:

- **Windows:** 64-bit and 32-bit `.exe` installers; 64-bit and 32-bit `.msi` installers; ARM64/AArch64 builds
- **macOS:** Universal `.dmg` build for Intel and Apple Silicon
- **Linux:** 64-bit and 32-bit tarballs; ARM64/AArch64 tarballs

The installers and executables for **Firefox** and **Firefox ESR** can be found on the [Firefox downloads page](https://www.firefox.com/en-US/download/all/).

## Deploy Firefox

Once you've selected a release channel and downloaded the appropriate installers, the next step is to deploy Firefox across your devices.
Firefox is deployed using a variety of common enterprise management tools:

| Method                      | Description                                                                                                    |
| --------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Group Policy (GPO)**      | Most suited for Windows environments. Supports machine-wide installs and policy control.                       |
| **Microsoft Intune**        | Supports `.msi` deployment, update management, and policy enforcement on Windows.                              |
| **SCCM / Endpoint Manager** | Suitable for large-scale Windows deployments. The `.msi` is recommended for silent or automated configuration. |
| **Jamf Pro (macOS)**        | Deploy the macOS `.dmg` or `.pkg` versions, including custom configurations and profiles.                      |
| **MDM (macOS/Linux)**       | Firefox supports configuration profiles for macOS and JSON-based policy deployment for Linux.                  |
| **Custom**                  | Custom scripts can deploy the tarball or `.dmg` on Linux or macOS.                                             |

## Configure policies

After Firefox is deployed, you can manage browser behavior using enterprise policies.
Enterprise policies do not need to be bundled with the Firefox installer, but can be independently applied using the same management software used to deploy Firefox:

- **Windows Group Policy (GPO)** - via ADMX templates
- **macOS configuration profiles** - deployed through Jamf or MDM
- **Linux JSON configuration files** - typically placed in `/etc/firefox/policies/policies.json`

For more information, see the [Configuring policies](/guides/policies-configuration/) guide.
Common policies include:

- [`DisableAppUpdate`](/reference/policies/#disableappupdate) - lock Firefox to a known version
- [`Certificates`](/reference/policies/#certificates) - import or trust custom root CAs
- [`BlockAboutConfig`](/reference/policies/#blockaboutconfig) - prevent users from modifying advanced preferences
- [`Homepage`](/reference/policies/#homepage) - set a company homepage
- [`Extensions`](/reference/policies/#extensions) - force-install approved extensions
- [`Proxy`](/reference/policies/#proxy) - configure proxy settings or enforce a PAC file

For a list of available policies, see the [policy reference](/reference/policies/).
Additionally, policy templates are available for Windows, macOS, and Linux in the [github.com/mozilla/policy-templates](https://github.com/mozilla/policy-templates) repository.

### Policy example (Linux/macOS policy JSON)

This example `policies.json` file disables automatic Firefox updates and sets a locked company homepage:

```json
{
  "policies": {
    "DisableAppUpdate": true,
    "Homepage": {
      "URL": "https://internal.example.com",
      "Locked": true
    }
  }
}
```

## See also

- [Enterprise policy reference](/reference/policies/)
- [whattrainisitnow.com](https://whattrainisitnow.com/): Firefox release trains and major milestones
