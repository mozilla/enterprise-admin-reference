<!-- See the Release notes section of CONTRIBUTING.md. -->

# Firefox release notes for enterprise admins

## 154

_Released 18 August 2026._

These changes apply to Firefox 154 and Firefox ESR 153.1.0. Firefox ESR 153 is the current ESR.

> **Firefox moves from a four-week to a two-week release cycle beginning with Firefox 155.**
> Bug fixes, updates and features reach users more quickly once they are ready to ship.

### New in Firefox 154

- [`CNSA2KeyAgreementEnabled`](/reference/policies/cnsa2keyagreementenabled/): Enable the CNSA 2.0 ML-KEM-1024 key agreement for TLS.
- [`DefaultBrowserSettingEnabled`](/reference/policies/defaultbrowsersettingenabled/): Prevent users from changing the default browser.

### Changed

- [`SanitizeOnShutdown`](/reference/policies/sanitizeonshutdown/): Added an `Exceptions` option to configure sites whose data should not be cleared on shutdown.

### Fixed

- [`SearchEngines`](/reference/policies/searchengines/): `PreventInstalls` did not prevent users from manually adding search engines in Settings or from the context menu. ([bug 2052965](https://bugzilla.mozilla.org/show_bug.cgi?id=2052965))
- The `-width` and `-height` command-line options did not correctly set the Firefox window size. ([bug 1635927](https://bugzilla.mozilla.org/show_bug.cgi?id=1635927))
- Extended Protection (channel and service binding) for Windows SSPI authentication worked when using SPNEGO but not when using Kerberos directly. ([bug 1179722](https://bugzilla.mozilla.org/show_bug.cgi?id=1179722))

## 153

_Released 21 July 2026._

### New in Firefox 153

- [`DisableRemoteSettingsAndAcceptSecurityConsequences`](/reference/policies/disableremotesettingsandacceptsecurityconsequences/): Disable Remote Settings updates and accept the resulting security consequences.

### New in Firefox ESR 153.0.0

- [`AIControls`](/reference/policies/aicontrols/): Configure AI controls.
- [`BrowserDataBackup`](/reference/policies/browserdatabackup/): Disable backup or restore of profile data.
- [`DefaultSerialGuardSetting`](/reference/policies/defaultserialguardsetting/): Control use of the Web Serial API.
- [`DisableRemoteImprovements`](/reference/policies/disableremoteimprovements/): Prevent Firefox from applying performance, stability, and feature changes between updates.
- [`DisableRemoteSettingsAndAcceptSecurityConsequences`](/reference/policies/disableremotesettingsandacceptsecurityconsequences/): Disable Remote Settings updates and accept the resulting security consequences.
- [`IPProtectionAvailable`](/reference/policies/ipprotectionavailable/): Prevent the built-in VPN from being available to users.
- [`LocalNetworkAccess`](/reference/policies/localnetworkaccess/): Configure local network access security features.
- [`RelaunchRequired`](/reference/policies/relaunchrequired/): Require Firefox to be relaunched within a given period and notify the user of the upcoming relaunch.
- [`SitePolicies`](/reference/policies/sitepolicies/): Fine grained control over policies for specific sites.
- [`VisualSearchEnabled`](/reference/policies/visualsearchenabled/): Enable or disable visual search.
- [`XSLTEnabled`](/reference/policies/xsltenabled/): Enable or disable support for the XSLTProcessor JavaScript API and the XSLT processing instruction.

## 151

_Released 19 May 2026._

### New in Firefox 151

- [`DefaultSerialGuardSetting`](/reference/policies/defaultserialguardsetting/): Control use of the Web Serial API.
- [`XSLTEnabled`](/reference/policies/xsltenabled/): Enable or disable support for the XSLTProcessor JavaScript API and the XSLT processing instruction.

## 150

_Released 21 April 2026._

### New in Firefox 150

- [`RelaunchRequired`](/reference/policies/relaunchrequired/): Require Firefox to be relaunched within a given period and notify the user of the upcoming relaunch.
- [`SitePolicies`](/reference/policies/sitepolicies/): Fine grained control over policies for specific sites.

## 149

_Released 24 March 2026._

### New in Firefox 149

- [`IPProtectionAvailable`](/reference/policies/ipprotectionavailable/): Prevent the built-in VPN from being available to users.

### New in Firefox 149.0.2

- [`AIControls`](/reference/policies/aicontrols/): Configure AI controls.

## 148

_Released 24 February 2026._

### New in Firefox 148

- [`DisableRemoteImprovements`](/reference/policies/disableremoteimprovements/): Prevent Firefox from applying performance, stability, and feature changes between updates.

## 146

_Released 9 December 2025._

### New in Firefox 146

- [`BrowserDataBackup`](/reference/policies/browserdatabackup/): Disable backup or restore of profile data.

## 145

_Released 11 November 2025._

### New in Firefox 145

- [`LocalNetworkAccess`](/reference/policies/localnetworkaccess/): Configure local network access security features.

## 144

_Released 14 October 2025._

### New in Firefox 144

- [`GenerativeAI`](/reference/policies/generativeai/): Configure generative AI features.
- [`VisualSearchEnabled`](/reference/policies/visualsearchenabled/): Enable or disable visual search.

### New in Firefox ESR 140.4.0

- [`GenerativeAI`](/reference/policies/generativeai/): Configure generative AI features.

## 140

_Released 24 June 2025._

### New in Firefox ESR 140.0.0

- [`SkipTermsOfUse`](/reference/policies/skiptermsofuse/): Configure display settings for the Firefox Terms of Use and Privacy Notice on startup.

## 139

_Released 27 May 2025._

### New in Firefox 139

- [`SearchEngines`](/reference/policies/searchengines/): Configure search engines: add new ones, set defaults, prevent user installs, and remove built-ins.

## 138

_Released 29 April 2025._

### New in Firefox 138

- [`SkipTermsOfUse`](/reference/policies/skiptermsofuse/): Configure display settings for the Firefox Terms of Use and Privacy Notice on startup.

## 133

_Released 26 November 2024._

### New in Firefox ESR 128.5.0

- [`MicrosoftEntraSSO`](/reference/policies/microsoftentrasso/): Allow single sign-on for Microsoft Entra accounts on macOS.

## 132

_Released 29 October 2024._

### New in Firefox 132.0.1

- [`MicrosoftEntraSSO`](/reference/policies/microsoftentrasso/): Allow single sign-on for Microsoft Entra accounts on macOS.

## 131

_Released 1 October 2024._

### New in Firefox ESR 128.3.0

- [`PrivateBrowsingModeAvailability`](/reference/policies/privatebrowsingmodeavailability/): Set availability of private browsing mode.

## 130

_Released 3 September 2024._

### New in Firefox 130

- [`PrivateBrowsingModeAvailability`](/reference/policies/privatebrowsingmodeavailability/): Set availability of private browsing mode.

## 128

_Released 9 July 2024._

### New in Firefox ESR 128.0.0

- [`AllowFileSelectionDialogs`](/reference/policies/allowfileselectiondialogs/): Enable or disable file selection dialogs.
- [`ContentAnalysis`](/reference/policies/contentanalysis/): Configure Firefox to use an agent for Data Loss Prevention (DLP) that is compatible with the Google Chrome Content Analysis Connector Agent SDK.
- [`DisableAccounts`](/reference/policies/disableaccounts/): Disable account-based services, including sync.
- [`DisableEncryptedClientHello`](/reference/policies/disableencryptedclienthello/): Disable the TLS Feature for Encrypted Client Hello.
- [`HttpAllowlist`](/reference/policies/httpallowlist/): Configure sites that will not be upgraded to HTTPS.
- [`HttpsOnlyMode`](/reference/policies/httpsonlymode/): Configure HTTPS-Only Mode.
- [`PostQuantumKeyAgreementEnabled`](/reference/policies/postquantumkeyagreementenabled/): Enable post-quantum key agreement for TLS.
- [`TranslateEnabled`](/reference/policies/translateenabled/): Enable or disable webpage translation.
