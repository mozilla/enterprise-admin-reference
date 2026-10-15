---
title: Choosing a Firefox release channel
description: Understand the difference between Firefox, Firefox ESR and Firefox Enterprise, and how each can be managed in an organization.
sidebar:
  label: Choosing a release channel
---

Organizations can deploy **Firefox Enterprise**, **Firefox Extended Support Release (ESR)**, or **Firefox**, which differ in their release schedules, features and how they are managed.
This article describes the differences between them and the tradeoffs to consider when choosing one.

## Firefox Enterprise

**Firefox Enterprise** is a dedicated version of Firefox for organizations with strict security, governance and compliance requirements, such as governments and regulated industries.
It is available in early access, beginning with Firefox Enterprise 158.
Firefox Enterprise is built on Firefox and therefore receives the same security fixes and web platform improvements as each Firefox release.
There are Nightly and Release channels, and an ESR channel is expected in future.

Firefox Enterprise is managed from an Admin Console that your organization deploys on its own infrastructure.
When you host the Admin Console, you also host the supporting services for telemetry, crash collection, Sync, Remote Settings and browser updates, so the data these services handle goes to your organization's infrastructure rather than to Mozilla.

The Admin Console adds centralized policy management, company sign-in with device posture checks, data loss prevention, update control and security event logging.
See [Firefox Enterprise](/guides/firefox-enterprise/) for the full list of features and how to get access.

> [!NOTE]
> With the release of Firefox Enterprise, Firefox and Firefox ESR can still be managed with the same existing tools and policies, and their release schedules are unchanged.

## Firefox Extended Support Release (ESR)

New versions of ESR are released **annually**.
After release, each ESR version receives incremental security updates as _minor_ or _patch_ release versions (`major.minor.patch`).
Other features, such as UI or UX improvements, are excluded from the ESR channel, and are limited to annual ESR releases.

> [!NOTE]
> ESR is ideal for deployment environments that need stability and long-term compatibility.
> It may be convenient to choose ESR to avoid frequent QA cycles, for example.
> Other enterprise systems may rely on visual or behavioral consistency during testing or in production environments.

## Firefox release channel

The **Firefox** release channel is mostly used by consumers, but it is also possible for people to use policies to manage the browser for enterprise use.
Beginning with Firefox 155 (September 2026), a new major release is made [every two weeks](https://whattrainisitnow.com/release/?version=release).
Releases include new features, enhancements, and bug fixes.

The following resources are useful for tracking what's changed in Firefox releases:

- [Firefox releases](https://www.firefox.com/en-US/releases/): details on the features and fixes improve everyday browsing.
- [Firefox release notes for developers](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases): these release notes describe **developer-facing** changes.
  This contains details on new or updated web platform features, APIs, and tools that developers use.

> [!NOTE]
> The Firefox release channel is best suited for organizations that want the latest fixes and features as soon as they are available.
> Because this release channel contains more frequent updates than ESR, UI changes, privacy or security changes may require testing with your environment in a more frequent cadence than the Extended Support Release.

## Release schedule

Detailed information about the release schedule for Firefox, including APIs for programmatic access to release data, can be found on [whattrainisitnow](https://whattrainisitnow.com/about/).
The whattrainisitnow website provides a release calendar that describes upcoming releases for all Firefox release channels.

## See also

- [Firefox downloads](https://www.firefox.com/en-US/download/all/)
- [Enterprise policies](/reference/policies/)
