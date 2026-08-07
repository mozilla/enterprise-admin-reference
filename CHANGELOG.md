# enterprise-firefox-admin-docs

<!-- markdownlint-disable MD024 -->

## Unreleased

### Added

- `DisableLocalPolicies` policy: Disable all local policy sources (policies.json, Windows GPO and macOS plist). [#216](https://github.com/mozilla/enterprise-admin-reference/pull/216)

### Changed

- `CrashReportsSubmit` policy: Update policy structure to remove `ForceAutoSubmit` key in favor of `Enabled` key ([#222](https://github.com/mozilla/enterprise-admin-reference/pull/222))

<!-- unpublished for now

## ent-149.0.2

### Added

- `AIControls` policy: Configure AI controls. [#103](https://github.com/mozilla/enterprise-admin-reference/pull/103)

## ent-149.0.0

### Added

- `AccessConnector` policy: Configure an Access Connector for proxying web traffic. [#102](https://github.com/mozilla/enterprise-admin-reference/pull/102)
- `AIChatbot` policy: Configure the AI chatbot sidebar. [#106](https://github.com/mozilla/enterprise-admin-reference/pull/106)
- `CrashReportsSubmit` policy: Configure crash report submission settings. [#86](https://github.com/mozilla/enterprise-admin-reference/pull/86)
- `Sync` policy: Enable or disable sync and define which data to include. [#70](https://github.com/mozilla/enterprise-admin-reference/pull/70)

-->

## fx-151.0.0

### Added

- `DefaultSerialGuardSetting`: Control use of the Web Serial API. ([#125](https://github.com/mozilla/enterprise-admin-reference/pull/125))
- `XSLTEnabled`: Enable or disable support for the XSLTProcessor JavaScript API and the XSLT processing instruction. ([#128](https://github.com/mozilla/enterprise-admin-reference/pull/128))

## esr-153.0.0

### Added

- `AIControls`: Configure AI controls. ([#103](https://github.com/mozilla/enterprise-admin-reference/pull/103))
- `BrowserDataBackup`: Disable backup or restore of profile data. ([#33](https://github.com/mozilla/enterprise-admin-reference/pull/33))
- `DefaultSerialGuardSetting`: Control use of the Web Serial API. ([#125](https://github.com/mozilla/enterprise-admin-reference/pull/125))
- `DisableRemoteImprovements`: Prevent Firefox from applying performance, stability, and feature changes between updates. ([#64](https://github.com/mozilla/enterprise-admin-reference/pull/64))
- `DisableRemoteSettingsAndAcceptSecurityConsequences`: Disable Remote Settings updates, stopping Firefox from receiving updated data such as blocklists, and accept the resulting security consequences. ([#236](https://github.com/mozilla/enterprise-admin-reference/pull/236))
- `IPProtectionAvailable`: Prevent the built-in VPN from being available to users. ([#112](https://github.com/mozilla/enterprise-admin-reference/pull/112))
- `LocalNetworkAccess`: Configure local network access security features. ([#67](https://github.com/mozilla/enterprise-admin-reference/pull/67))
- `RelaunchRequired`: Require Firefox to be relaunched within a given period and notify the user of the upcoming relaunch. ([#127](https://github.com/mozilla/enterprise-admin-reference/pull/127))
- `SitePolicies`: Defines policies scoped to specific sites. ([#82](https://github.com/mozilla/enterprise-admin-reference/pull/82))
- `VisualSearchEnabled`: Enable or disable visual search. ([#33](https://github.com/mozilla/enterprise-admin-reference/pull/33))
- `XSLTEnabled`: Enable or disable support for the XSLTProcessor JavaScript API and the XSLT processing instruction. ([#128](https://github.com/mozilla/enterprise-admin-reference/pull/128))

## fx-150.0.0

### Added

- `RelaunchRequired`: Require Firefox to be relaunched within a given period and notify the user of the upcoming relaunch. ([#127](https://github.com/mozilla/enterprise-admin-reference/pull/127))
- `SitePolicies`: Defines policies scoped to specific sites. ([#82](https://github.com/mozilla/enterprise-admin-reference/pull/82))

## fx-149.0.2

### Added

- `AIControls` policy: Configure AI controls. [#103](https://github.com/mozilla/enterprise-admin-reference/pull/103)
- `IPProtectionAvailable` policy: Prevent the built-in VPN from being available to users. [#112](https://github.com/mozilla/enterprise-admin-reference/pull/112)

## fx-148.0.0

### Added

- `DisableRemoteImprovements`: Prevent Firefox from applying performance, stability, and feature changes between updates. ([#64](https://github.com/mozilla/enterprise-admin-reference/pull/64))

## fx-145.0.0

### Added

- `LocalNetworkAccess`: Configure local network access security features. ([#67](https://github.com/mozilla/enterprise-admin-reference/pull/67))

## fx-119.0.0

### Added

- `DisableAccounts`: Disable account-based services, including sync. ([#68](https://github.com/mozilla/enterprise-admin-reference/pull/68))
