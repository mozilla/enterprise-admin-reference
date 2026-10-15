---
title: Firefox Enterprise
description: Learn what Firefox Enterprise adds to Firefox, including the Admin Console, company sign-in, data protection and security event logging, and how to get access.
---

**Firefox Enterprise** is a dedicated version of Firefox for organizations with strict security, governance and compliance requirements, such as governments and regulated industries.
It is available in early access, beginning with Firefox Enterprise 158.
Firefox Enterprise is built on Firefox and therefore receives the same security fixes and web platform improvements as each Firefox release.

Firefox Enterprise is managed from an Admin Console that your organization deploys on its own infrastructure.
When you host the Admin Console, you also host the supporting services for telemetry, crash collection, Sync, Remote Settings and browser updates, so the data these services handle goes to your organization's infrastructure rather than to Mozilla.

## Management

- **Centralized policy management:** Manage enterprise policies from the Admin Console, at the organization, organizational unit or individual user level.
  Many changes take effect without a browser restart, including proxy configuration, website filtering, cookies, HTTPS-Only Mode, Lockdown Mode, data loss prevention and extension settings.
  The console can be made the only source of policies with [`DisableLocalPolicies`](/reference/policies/disablelocalpolicies/), so policies set locally on the device are ignored.
- **Users, devices and roles:** Manage users, sessions and devices, and organize users into organizational units.
  Admin and owner roles provide different permission levels, and service accounts allow programmatic access.
- **Update control:** Set a minimum Firefox Enterprise version, control when devices update, and restart the browser automatically when an update is ready to install.
- **Extension controls:** Allow or block extensions by type, permission and website, stop employees from turning off extension auto-updates, and set a custom update address for extensions.
  You can also stop employees from changing website permissions for force-installed Manifest V3 extensions, and choose which websites an extension can run on with `runtime_allowed_hosts` and `runtime_blocked_hosts`.
  See [`ExtensionSettings`](/reference/policies/extensionsettings/).
- **AI chatbot:** Choose which AI chatbot providers are available in the sidebar, add custom providers and set the default.
  See [`AIChatbot`](/reference/policies/aichatbot/).
- **Sync:** Turn Sync on or off and choose which data to sync, such as bookmarks, history, passwords and open tabs, using your self-hosted Sync service.
  When Sync is turned off, Firefox Enterprise doesn't prompt employees to sign in to Sync or show tabs from other devices.
  See [`Sync`](/reference/policies/sync/).

## Sign-in and sessions

- **Company sign-in:** Employees sign in with your organization's single sign-on before they can browse.
  Any identity provider that supports OpenID Connect (OIDC) works, including the multi-factor authentication it requires.
- **Device posture checks:** Firefox Enterprise reports each device's operating system, disk encryption, endpoint security software status, Active Directory domain membership, installed extensions and network details.
  Admins can require a specific posture before an employee can sign in, and Firefox signs the employee out if the device stops meeting it.
- **Sign-out and session locking:** Choose whether employees are signed out when the browser closes, restarts or crashes.
  Otherwise, the session locks and employees unlock it with their operating system sign-in, such as Touch ID or Windows Hello.
  See [`SignOut`](/reference/policies/signout/).
- **Remote sign-out:** Sign out a user or device from the Admin Console, for example if a laptop is lost or stolen.

## Data protection

- **Data loss prevention (DLP):** Block or warn about pasting, file uploads, downloads and printing on the websites you choose, with a custom message, such as blocking pasting into unapproved AI tools.
  Checks run in the browser on the device, so content isn't sent over the network for inspection.
  If a third-party DLP agent connects through [`ContentAnalysis`](/reference/policies/contentanalysis/), the built-in DLP turns off and defers to that agent.
  Warnings and blocks are recorded in the Admin Console, and [`ContentAnalysisTelemetry`](/reference/policies/contentanalysistelemetry/) can turn this logging off or reduce the URL detail it records.
  See [`DataLossPrevention`](/reference/policies/datalossprevention/).
- **Watermarking:** Stamp a [`Watermark`](/reference/policies/watermark/) across sensitive pages, such as the employee's email address and the time, with your choice of text, color and websites.
- **Lockdown Mode:** Apply extra restrictions to specific websites: turn off JavaScript just-in-time (JIT) compilation, block service workers, prevent HTTP downgrades, or isolate the site in its own container, optionally a temporary one that clears its data when the last tab closes.
  Employees see an icon in the address bar when Lockdown Mode applies.
  See [`SitePolicies`](/reference/policies/sitepolicies/).
- **Profile data encryption:** History, form data, logins and TLS session tokens are encrypted on disk with a key provided by the Admin Console, so a copied profile folder can't be decrypted.
  Encryption is on by default.
- **Access Connector:** Employees can reach internal sites and web apps from personal devices without a device-level VPN, through a proxy on your infrastructure.
  See [`AccessConnector`](/reference/policies/accessconnector/).

## Visibility

- **Security event logging:** Log downloads, printing, extension installs, visits to websites blocked by policy, and unsafe websites and downloads flagged by Safe Browsing.
  Each event type is off until an admin turns it on, and admins choose how much detail to record, such as full web addresses, just the domain or none.
  See [`SecurityLogging`](/reference/policies/securitylogging/).
- **Audit logs and SIEM:** Review administrator audit logs and integrate with your existing SIEM.
- **Crash reporting:** Send crash reports automatically to the Admin Console or turn crash reporting off.
  See [`CrashReportsSubmit`](/reference/policies/crashreportssubmit/).

## Differences from Firefox

- Firefox Enterprise removes connections to Mozilla and to third-party services that aren't needed in a managed deployment, and these can't be re-enabled.
- Consumer features are omitted, such as sponsored stories and shortcuts on New Tab, Firefox VPN, Firefox Relay email masks, breach alerts and extension recommendations.
- Firefox Enterprise profiles can only be opened in Firefox Enterprise, not in regular Firefox.
- When employees sign in, a company badge shows that the browser is managed by their organization and may apply logging, data loss prevention or watermarking.
- Firefox Enterprise has its own branding and theme.

## Getting access

Firefox Enterprise requires an Admin Console deployed on your organization's infrastructure.
To evaluate it, [request early access](https://www.firefox.com/en-US/enterprise/contact/?utm_source=fx-admin-docs) to discuss deployment options.

- [Firefox Enterprise 158 release notes](https://www.firefox.com/en-US/firefox/enterprise/158.0/releasenotes/)
- [Firefox Enterprise 158 system requirements](https://www.firefox.com/en-US/firefox/enterprise/158.0/system-requirements/)

## See also

- [Choosing a Firefox release channel](/guides/firefox-channels/)
- [Enterprise policies](/reference/policies/)
