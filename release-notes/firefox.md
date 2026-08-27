<!-- See the Release notes section of CONTRIBUTING.md. -->
<!-- markdownlint-disable MD024 -->

# Firefox release notes for enterprise admins

## 154

_Released 18 August 2026._

These changes apply to Firefox 154 and Firefox ESR 153.1.0 unless explicitly stated.
Firefox ESR 153 is the current ESR.

> **Firefox moves from a four-week to a two-week release cycle beginning with Firefox 155.**
> Bug fixes, updates and features reach users more quickly once they are ready to ship.

### New in Firefox 154

- [`CNSA2KeyAgreementEnabled`](/reference/policies/cnsa2keyagreementenabled/): Enable the CNSA 2.0 ML-KEM-1024 key agreement for TLS. Does not apply to the ESR. ([bug 2052296](https://bugzilla.mozilla.org/show_bug.cgi?id=2052296))
- [`DefaultBrowserSettingEnabled`](/reference/policies/defaultbrowsersettingenabled/): Prevent users from changing the default browser. ([bug 2051921](https://bugzilla.mozilla.org/show_bug.cgi?id=2051921))

### Changes

- [`SanitizeOnShutdown`](/reference/policies/sanitizeonshutdown/): Added an `Exceptions` option to configure sites whose data should not be cleared on shutdown. Firefox 154 only. ([bug 2049937](https://bugzilla.mozilla.org/show_bug.cgi?id=2049937))

### Fixes

- [`SearchEngines`](/reference/policies/searchengines/): `PreventInstalls` did not prevent users from manually adding search engines in Settings or from the context menu. ([bug 2052965](https://bugzilla.mozilla.org/show_bug.cgi?id=2052965))
- The `-width` and `-height` command-line options did not correctly set the Firefox window size. Firefox 154 only. ([bug 1635927](https://bugzilla.mozilla.org/show_bug.cgi?id=1635927))
- Extended Protection (channel and service binding) for Windows SSPI authentication worked when using SPNEGO but not when using Kerberos directly. ([bug 1179722](https://bugzilla.mozilla.org/show_bug.cgi?id=1179722))

## 153

_Released 21 July 2026._

These changes apply to Firefox 153 and Firefox ESR 153 unless explicitly stated.
Firefox ESR 153 is the new ESR - enterprise changes are no longer backported to Firefox ESR 140.
Policies listed under Firefox ESR 153.0.0 became available to ESR admins for the first time in this release.

### New in Firefox 153

- [`DisableRemoteSettingsAndAcceptSecurityConsequences`](/reference/policies/disableremotesettingsandacceptsecurityconsequences/): Disable Remote Settings updates and accept the resulting security consequences. Only use this policy when the consequences are fully understood.

### Changes

- [`Containers`](/reference/policies/containers/): Updated for the new container color palette. Existing color names are migrated to the new names automatically.
- [`Cookies`](/reference/policies/cookies/): `Behavior` and `BehaviorPrivateBrowsing` accept `partition-foreign`, the new name for the `reject-tracker-and-partition-foreign` cookie behavior. Configurations using the old name continue to work.
- [`ExtensionSettings`](/reference/policies/extensionsettings/): Control extension host permissions using `runtime_allowed_hosts` and `runtime_blocked_hosts`, and control which permissions extensions may request using `allowed_permissions`.
- Users can no longer change the host permissions of Manifest V3 extensions installed using `force_installed`.
- [`ExtensionSettings`](/reference/policies/extensionsettings/): `force_installed` and `normal_installed` extensions can be installed directly from addons.mozilla.org when `install_url` is omitted.
- [`Homepage`](/reference/policies/homepage/): Added a `NewTabOnRestore` option to open the default start page or `about:newtab` after restoring a previous session.
- [`ManagedBookmarks`](/reference/policies/managedbookmarks/): Bookmarklets using `javascript:` URLs are now supported.
- Automatically discovered printers are now listed after manually configured printers in the print destination list. ([bug 1996569](https://bugzilla.mozilla.org/show_bug.cgi?id=1996569))
- Firefox installed from a macOS `.pkg` package can now update without prompting for administrator credentials. ([bug 1812480](https://bugzilla.mozilla.org/show_bug.cgi?id=1812480))

### Fixes

- AutoConfig can once again set the `browser.startup.homepage` preference to a `data:` URL, fixing a regression introduced in Firefox 152. ([bug 2047962](https://bugzilla.mozilla.org/show_bug.cgi?id=2047962))
- [`DisableSecurityBypass`](/reference/policies/disablesecuritybypass/): The **Allow download** button was still shown when `SafeBrowsing` was set to `false`. ([bug 1894373](https://bugzilla.mozilla.org/show_bug.cgi?id=1894373))
- [`ExtensionSettings`](/reference/policies/extensionsettings/): Extensions that were no longer permitted by `allowed_types` were not removed or blocked when the setting changed. ([bug 2008100](https://bugzilla.mozilla.org/show_bug.cgi?id=2008100))
- [`ExtensionSettings`](/reference/policies/extensionsettings/): Individual Windows registry `REG_SZ` values overrode the JSON policy configuration when both were present. ([bug 2048696](https://bugzilla.mozilla.org/show_bug.cgi?id=2048696))
- [`FirefoxHome`](/reference/policies/firefoxhome/): The policy was not reflected correctly in the redesigned Settings. ([bug 2048048](https://bugzilla.mozilla.org/show_bug.cgi?id=2048048))
- [`PasswordManagerEnabled`](/reference/policies/passwordmanagerenabled/): The policy did not disable the Passwords sidebar panel. ([bug 2041232](https://bugzilla.mozilla.org/show_bug.cgi?id=2041232))
- [`PopupBlocking`](/reference/policies/popupblocking/): The policy did not lock all of the pop-up permission controls. ([bug 1888477](https://bugzilla.mozilla.org/show_bug.cgi?id=1888477))
- [`SanitizeOnShutdown`](/reference/policies/sanitizeonshutdown/): The policy now correctly locks the History settings when configured. ([bug 1888451](https://bugzilla.mozilla.org/show_bug.cgi?id=1888451))
- The Bookmarks and History sidebars could not be opened while the sidebar was hidden and [`PasswordManagerEnabled`](/reference/policies/passwordmanagerenabled/) was set to `false`. This regressed in Firefox 153.0 and was fixed in a later Firefox 153 release. ([bug 2056857](https://bugzilla.mozilla.org/show_bug.cgi?id=2056857))

### New in Firefox ESR 153.0.0

- [`AIControls`](/reference/policies/aicontrols/): Configure AI controls.
- [`BrowserDataBackup`](/reference/policies/browserdatabackup/): Disable backup or restore of profile data.
- [`DefaultSerialGuardSetting`](/reference/policies/defaultserialguardsetting/): Control use of the Web Serial API.
- [`DisableRemoteImprovements`](/reference/policies/disableremoteimprovements/): Prevent Firefox from applying performance, stability, and feature changes between updates.
- [`DisableRemoteSettingsAndAcceptSecurityConsequences`](/reference/policies/disableremotesettingsandacceptsecurityconsequences/): Disable Remote Settings updates and accept the resulting security consequences.
- [`IPProtectionAvailable`](/reference/policies/ipprotectionavailable/): Prevent the built-in VPN from being available to users.
- [`LocalNetworkAccess`](/reference/policies/localnetworkaccess/): Configure local network access security features.
- [`RelaunchRequired`](/reference/policies/relaunchrequired/): Require Firefox to be relaunched within a given period and notify the user of the upcoming relaunch.
- [`SitePolicies`](/reference/policies/sitepolicies/): Fine-grained control over policies for specific sites.
- [`VisualSearchEnabled`](/reference/policies/visualsearchenabled/): Enable or disable visual search.
- [`XSLTEnabled`](/reference/policies/xsltenabled/): Enable or disable support for the XSLTProcessor JavaScript API and the XSLT processing instruction.

## 152

_Released 16 June 2026._

These changes apply to Firefox 152 unless explicitly stated.
Firefox ESR 140.12.0 shipped the same day, but most of these changes were not backported to it.

### Changes

- [`DefaultSerialGuardSetting`](/reference/policies/defaultserialguardsetting/): Web Serial support is now disabled by default when Firefox is managed by enterprise policies.
- [`ExtensionSettings`](/reference/policies/extensionsettings/): Force-installed extensions are now always updated automatically, regardless of the `updates_disabled` setting. ([bug 2037243](https://bugzilla.mozilla.org/show_bug.cgi?id=2037243))
- [`FirefoxHome`](/reference/policies/firefoxhome/): Allow configuration of the Weather experience. Also in Firefox ESR 140.12.0.
- [`ManagedBookmarks`](/reference/policies/managedbookmarks/): Allow specifying favicons directly for managed bookmarks.
- Chatbot content is now available to extensions from content scripts. ([bug 1980404](https://bugzilla.mozilla.org/show_bug.cgi?id=1980404))
- Firefox now accepts TURN server responses whose `XOR-MAPPED-ADDRESS` does not match the ICE check, improving compatibility with some TURN server implementations. ([bug 2034159](https://bugzilla.mozilla.org/show_bug.cgi?id=2034159))

### Fixes

- [`DisableBuiltinPDFViewer`](/reference/policies/disablebuiltinpdfviewer/): Setting the policy to `false` overrode the PDF handling configured in `handlers.json`. Also in Firefox ESR 140.12.0. ([bug 1983032](https://bugzilla.mozilla.org/show_bug.cgi?id=1983032))
- [`DisableFirefoxAccounts`](/reference/policies/disablefirefoxaccounts/): The policy also disabled Backup and other unrelated settings after the Settings redesign. ([bug 2023825](https://bugzilla.mozilla.org/show_bug.cgi?id=2023825))
- [`DisableProfileImport`](/reference/policies/disableprofileimport/): The **Import Bookmarks** button on the Bookmarks Toolbar bypassed the policy. ([bug 1828282](https://bugzilla.mozilla.org/show_bug.cgi?id=1828282))
- [`DisableProfileImport`](/reference/policies/disableprofileimport/): The import option in `about:logins` was not covered by the policy. ([bug 1830463](https://bugzilla.mozilla.org/show_bug.cgi?id=1830463))

## 151

_Released 19 May 2026._

These changes apply to Firefox 151 and Firefox ESR 140.11.0 unless explicitly stated.
Firefox ESR 140 is the current ESR, and enterprise changes are no longer backported to Firefox ESR 128.

Firefox 153 will be the next ESR.
As that transition approaches, fewer non-security fixes and policy changes will be backported to Firefox ESR 140.
If you use the ESR, we recommend testing with Firefox Beta or Nightly to identify issues before Firefox ESR 153 ships.

### New in Firefox 151

- [`DefaultSerialGuardSetting`](/reference/policies/defaultserialguardsetting/): Control use of the Web Serial API. Does not apply to the ESR.
- [`XSLTEnabled`](/reference/policies/xsltenabled/): Enable or disable support for the XSLTProcessor JavaScript API and the XSLT processing instruction. Does not apply to the ESR.

### Changes

- Policy documentation has officially moved to <https://firefox-admin-docs.mozilla.org/>. Update any existing bookmarks.
- [`Preferences`](/reference/policies/preferences/): Allow setting preferences under the `devtools.` and `sidebar.` branches.
- [`ExtensionSettings`](/reference/policies/extensionsettings/): Support overriding update URLs. Firefox 151 only.

### Fixes

- [`DisableRemoteImprovements`](/reference/policies/disableremoteimprovements/): The policy was not reflected correctly in preferences. Firefox 151 only.
- Sites blocked by enterprise policy did not display the correct error message. Firefox 151 only.

## 150

_Released 21 April 2026._

These changes apply to Firefox 150 and Firefox ESR 140.10.0 unless explicitly stated.
Firefox ESR 140 is the current ESR.

### New in Firefox 150

- [`RelaunchRequired`](/reference/policies/relaunchrequired/): Require Firefox to be relaunched within a given period and notify the user of the upcoming relaunch. Does not apply to the ESR.
- [`SitePolicies`](/reference/policies/sitepolicies/): Fine-grained control over policies for specific sites. Does not apply to the ESR.

### Changes

- Policy documentation has officially moved to <https://firefox-admin-docs.mozilla.org/>.

### Fixes

- [`Homepage`](/reference/policies/homepage/): The policy was not working correctly in Firefox 149. Fixed in Firefox 149.0.2. Does not apply to the ESR.

### Notes

- Firefox ESR 115 support for Windows 7/8 and macOS 10.12, 10.13 and 10.14 is extended to August 2026.

## 149

_Released 24 March 2026._

These changes apply to Firefox 149 and Firefox ESR 140.9.0 unless explicitly stated.

### New in Firefox 149.0.2

- [`AIControls`](/reference/policies/aicontrols/): Configure AI controls. Does not apply to the ESR.
- [`IPProtectionAvailable`](/reference/policies/ipprotectionavailable/): Prevent the built-in VPN from being available to users. Does not apply to the ESR.

## 148

_Released 24 February 2026._

These changes apply to Firefox 148 unless explicitly stated.
Firefox ESR 140.8.0 shipped the same day, but these changes were not backported to it.

### New in Firefox 148

- [`DisableRemoteImprovements`](/reference/policies/disableremoteimprovements/): Prevent Firefox from applying performance, stability, and feature changes between updates.

### Changes

- [`GenerativeAI`](/reference/policies/generativeai/): Updated to cover PDF alt text generation and translations. ([bug 2013938](https://bugzilla.mozilla.org/show_bug.cgi?id=2013938))
- AI Controls settings now respect enterprise policy and locale or region restrictions. ([bug 2005805](https://bugzilla.mozilla.org/show_bug.cgi?id=2005805))
- Firefox now reports whether a profile is managed by enterprise policy, as `policies.is_enterprise` in the baseline telemetry ping. ([bug 1997959](https://bugzilla.mozilla.org/show_bug.cgi?id=1997959))

## 147

_Released 13 January 2026._

These changes apply to Firefox 147 and Firefox ESR 140.7.0 unless explicitly stated.
Firefox ESR 140 is the current ESR, so enterprise changes are no longer backported to Firefox ESR 128.

### Fixes

- Private Window options were still available from the Firefox View tab when private browsing was disabled. ([bug 2004669](https://bugzilla.mozilla.org/show_bug.cgi?id=2004669))
- A performance regression affecting extension native messaging reached the ESR in Firefox ESR 140.7.0. In earlier Firefox 140-series builds, native messaging operations could experience significantly increased latency, affecting enterprise extensions that communicate with external processes. The release channel received this fix in Firefox 146. ([bug 2002517](https://bugzilla.mozilla.org/show_bug.cgi?id=2002517))

### Known issues

- Using Trellix DLP Endpoint for Windows can cause crashes when dragging and dropping files.
  Set the `security.sandbox.content.close-ksecdd-handle` preference to `false` as a workaround.

## 146

_Released 9 December 2025._

These changes apply to Firefox 146 and Firefox ESR 140.6.0 unless explicitly stated.

### New in Firefox 146

- [`BrowserDataBackup`](/reference/policies/browserdatabackup/): Disable backup or restore of profile data.
  Does not apply to the ESR.

### Changes

- The version number, architecture and language were removed from the Windows uninstall registry key, improving compatibility with third-party tools. Does not apply to the ESR. ([bug 1995769](https://bugzilla.mozilla.org/show_bug.cgi?id=1995769))
- Firefox Labs can now be enabled regardless of the status of [`DisableTelemetry`](/reference/policies/disabletelemetry/) or [`DisableFirefoxStudies`](/reference/policies/disablefirefoxstudies/). Does not apply to the ESR. ([bug 1972647](https://bugzilla.mozilla.org/show_bug.cgi?id=1972647))

### Fixes

- Private Window options were still available when private browsing was disabled. ([bug 2001191](https://bugzilla.mozilla.org/show_bug.cgi?id=2001191))
- [`DisableProfileImport`](/reference/policies/disableprofileimport/): Data could still be imported in Firefox View when the policy was set. ([bug 1993863](https://bugzilla.mozilla.org/show_bug.cgi?id=1993863))
- [`DisplayMenuBar`](/reference/policies/displaymenubar/): User choice was not maintained. Did not affect the ESR. ([bug 1996449](https://bugzilla.mozilla.org/show_bug.cgi?id=1996449))
- [`DisablePasswordReveal`](/reference/policies/disablepasswordreveal/): The policy had stopped working. ([bug 2001459](https://bugzilla.mozilla.org/show_bug.cgi?id=2001459))

## 145

_Released 11 November 2025._

These changes apply to Firefox 145 and Firefox ESR 140.5.0 unless explicitly stated.

Mozilla has introduced Firefox Support for Organizations, a support offering for enterprise deployments of Firefox.

### New in Firefox 145

- [`LocalNetworkAccess`](/reference/policies/localnetworkaccess/): Configure local network access security features. Does not apply to the ESR.

### Changes

- [`GenerativeAI`](/reference/policies/generativeai/): Added an option to enable or disable all generative AI features.
- [`EnableTrackingProtection`](/reference/policies/enabletrackingprotection/): `BaselineExceptions` and `ConvenienceExceptions` can now be set in strict mode. Does not apply to the ESR.

### Fixes

- [`GenerativeAI`](/reference/policies/generativeai/): The `Chatbot` option did not turn off generative AI in the page context menu. ([bug 1994791](https://bugzilla.mozilla.org/show_bug.cgi?id=1994791))

## 144

_Released 14 October 2025._

These changes apply to Firefox 144 and Firefox ESR 140.4.0 unless explicitly stated.

### New in Firefox 144

- [`GenerativeAI`](/reference/policies/generativeai/): Configure generative AI features. `Chatbot` is the only option that applies to the ESR.
- [`VisualSearchEnabled`](/reference/policies/visualsearchenabled/): Enable or disable visual search. Does not apply to the ESR.

### New in Firefox ESR 140.4.0

- [`GenerativeAI`](/reference/policies/generativeai/): Configure generative AI features. Only the `Chatbot` option is available on the ESR.

### Changes

- [`Preferences`](/reference/policies/preferences/): Allow setting the `security.webauthn.always_allow_direct_attestation` preference.

### Fixes

- Some print options were still shown when printing was disabled. ([bug 1889569](https://bugzilla.mozilla.org/show_bug.cgi?id=1889569))
- Windows Kerberos authentication with Extended Protection did not work with a SHA384 SSL certificate. ([bug 1895277](https://bugzilla.mozilla.org/show_bug.cgi?id=1895277))

### Notes

- Firefox ESR 115 support for Windows 7/8 and macOS 10.12, 10.13 and 10.14 is extended to March 2026.

## 143

_Released 16 September 2025._

These changes apply to Firefox 143 and Firefox ESR 140.3.0 unless explicitly stated.

### Notes

- Firefox ESR 128 goes out of support with this release. Firefox ESR 128 users are upgraded to Firefox ESR 140.
