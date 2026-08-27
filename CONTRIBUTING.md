# Contributing

## Project structure

The project is built using Starlight.
Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory.
Each file is exposed as a route based on its file name.
Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

### Code examples

Reusable code snippets can be placed in `src/examples/`.
To reuse a snippet like `src/examples/policy.json`, include it in markdown like so:

```mdx
import { Code } from "@astrojs/starlight/components";
import policy from "/src/examples/policy.json?raw";

See my example:

<Code code={policy} lang="json" title="policies.json" />
```

### Policy examples

Each reference page shows a copy & paste-ready JSON example under `## Examples`.
The examples come from the upstream policy schema, which is fetched to `schema/policies-schema.json`.
This can be refreshed from upstream using `npm run schema:sync`.

To add the example to a policy page, use the `PolicyExample` component and pass the policy name as `policy="policy-name"`:

```mdx
---
title: "Some page"
---

## Examples

<PolicyExample policy="MyCoolPolicy" />
```

`PolicyExample` is auto-imported into every page under `src/content/docs/reference/policies`, so there's no need for an `import` line.
IDEs may flag `PolicyExample` as undefined in the `.mdx` files, but this is safe to ignore.

### Policy schema

`PolicyExample` renders the policy's JSON schema in a collapsible `JSON schema` block directly after the examples.
The schema is derived from the `schema/policies-schema.json` entry, with the following changes:

- Annotations (`description`, `examples`, and any `x-` prefixed keys) are stripped.
- `$ref`s (such as `#/definitions/url`) are inlined so the block is self-contained.

Policies absent from `schema/policies-schema.json` render a `Missing schema` message rather than blocking the build.
See `src/components/PolicySchema.astro` for details.

### Policy compatibility

Each reference page shows a table under `## Compatibility` giving the first Firefox, Firefox ESR, and Firefox Enterprise version that supports the policy.
The versions come from the policy's `x-compatibility` entry in `schema/policies-schema.json`, so they follow `npm run schema:sync` instead of being maintained by hand.

To add the table to a policy page, use the `PolicyCompat` component and pass the policy name as `policy="policy-name"`:

```mdx
<PolicyCompat policy="MyCoolPolicy" />
```

Anything the table cannot express belongs in prose directly below it.

### OMA-URIs

Reference pages do not document OMA-URIs. They live in
[`docs/oma-uris.md`](https://github.com/mozilla/policy-templates/blob/master/docs/oma-uris.md) in
`mozilla/policy-templates`, generated from `windows/firefox.admx` and published at
[mozilla.github.io/policy-templates/oma-uris](https://mozilla.github.io/policy-templates/oma-uris).

`src/plugins/inject-oma-uri.mjs` adds the `**OMA-URI:**` line below `**CCK2 Equivalent:**` at build
time, so a new policy page needs no markup.
The anchor is the lowercased policy name.

Two lists hardcode policies that get no addition:

- `NO_ADMX_EQUIVALENT` — no ADMX equivalent.
- `MISSING_UPSTREAM` — may need one but missing from `firefox.admx`. These log a build warning.
  Remove a name once it lands upstream and the link starts rendering.

## Release notes

Release notes live in `release-notes/firefox.md` and are published at `/release-notes/`.
We publish **one page per major Firefox release**, covering everything enterprise-relevant in that release cycle: the major release itself, any point releases, and the Firefox ESR release that ships alongside it.

That means a page for release 153 has a `New in Firefox 153` section and a `New in Firefox ESR 153.0.0` section, because Firefox ESR 153.0.0 shipped alongside Firefox 153.
The 149 page covers Firefox 149.0.2, which shipped later in the same cycle.

### Release note file structure

For each release, follow this convention:

```md
## 154

<!-- Release date -->

_Released 18 August 2026._

<!-- Which versions the release notes apply to and the current ESR -->

These changes apply to Firefox 154 and Firefox ESR 153.1.0 unless explicitly stated.
Firefox ESR 153 is the current ESR.

### New in Firefox 154

- [`CNSA2KeyAgreementEnabled`](/reference/policies/cnsa2keyagreementenabled/): Enable the CNSA 2.0 ML-KEM-1024 … Does not apply to the ESR. ([bug 2000001](https://bugzilla.mozilla/show_bug.cgi?id=2000001))

### Changes

- `SomePolicy`: Now defaults to `false`. ([bug 2000000](https://bugzilla.mozilla/show_bug.cgi?id=2000000))

### Fixes

- [`SearchEngines`](/reference/policies/searchengines/): `PreventInstalls` did not prevent users from manually… ([bug 2052965](https://bugzilla.mozilla.org/show_bug.cgi?id=2052965))

<!-- an optional notes section -->

### Notes

- Firefox ESR 115 support for Windows 7/8 and macOS 10.12, 10.13 and 10.14 extends to August 2026.
```

The following details matter for the generated pages:

- Headings are the version number only: a `process` hook prefixes the headings with `Firefox`, so `## 154` is published as `Firefox 154` at `/release-notes/version/firefox-154/`.
- Link each policy to its reference page, at the lowercased policy name.
  Builds fail on broken internal links, so a policy with no reference page yet can be left unlinked.
- Anything that deviates from co-shipping needs a scope note, like `Firefox 154 only.`, `Does not apply to the ESR.` at the end of the sentence before the bug link.

### Fact checking

The following things should be checked:

- **Which ESR version shipped with a Firefox release**.
  Check <https://whattrainisitnow.com/api/firefox/releases/esr>.
- **Ship dates** come from <https://product-details.mozilla.org/1.0/firefox_history_major_releases.json>, or the `future` endpoint for releases that haven't shipped.
- **Whether something reached ESR**.
  For a new policy or option, check whether it's in `browser/components/enterprisepolicies/schemas/policies-schema.json` at the ESR release tag, like `FIREFOX_140_11_0esr_RELEASE`.
  For a fix, check the bug's `cf_status_firefox_esr140` or `cf_status_firefox_esr153` flag on Bugzilla.
- **Sub-properties or options**.
  The policy's block in `Policies.sys.mjs` at the release tag is a good primary source, because it shows the options the build reads.
  For example, the `NewTabOnRestore` sub-property was added in Firefox 153, but the compat table currently describes a policy as a whole rather than its options.
  You can fetch a file at a tag with `https://hg-edge.mozilla.org/releases/<branch>/raw-file/<tag>/browser/components/enterprisepolicies/Policies.sys.mjs`, using branches like `mozilla-release` or `mozilla-esr153` and tags like `FIREFOX_154_0_RELEASE` or `FIREFOX_153_1_0esr_RELEASE`.

The daily `schema-sync` workflow opens a PR when upstream adds or changes a policy, which is the prompt to add a release note.
