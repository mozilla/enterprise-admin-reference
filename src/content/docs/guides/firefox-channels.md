---
title: Firefox and Firefox Extended Support Release (ESR)
description: Understand the difference between Firefox and Firefox ESR and how both can be managed using enterprise policies.
sidebar:
  label: Firefox and Firefox ESR
---

Firefox is available in multiple **release channels** which have different features and release schedules.
This article describes the difference between the channels and the tradeoffs to consider when choosing one.
The channels that are most appropriate for enterprise usage are **Firefox** and **Firefox Extended Support Release (ESR)**.

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

## Firefox Extended Support Release (ESR)

New versions of ESR are released **annually**.
After release, each ESR version receives incremental security updates as _minor_ or _patch_ release versions (`major.minor.patch`).
Other features, such as UI or UX improvements, are excluded from the ESR channel, and are limited to annual ESR releases.

> [!NOTE]
> ESR is ideal for deployment environments that need stability and long-term compatibility.
> It may be convenient to choose ESR to avoid frequent QA cycles, for example.
> Other enterprise systems may rely on visual or behavioral consistency during testing or in production environments.

## Firefox release schedule

Detailed information about the release schedule for Firefox, including APIs for programmatic access to release data, can be found on [whattrainisitnow](https://whattrainisitnow.com/about/).
This website provides a release calendar that describes upcoming releases for all Firefox release channels.

## See also

- [Firefox downloads](https://www.firefox.com/en-US/download/all/)
- [Enterprise policies](/reference/policies/)
