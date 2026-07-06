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

## Changelog

The changelog is based on **Firefox versions**, not documentation versions.  
If something changes, it should be recorded under the software version where an admin would expect to see those changes.

### Version prefixes

Each version heading must include a release channel prefix so it's clear which release train it belongs to:

| Prefix | Channel            | Example          |
| ------ | ------------------ | ---------------- |
| `fx-`  | Firefox            | `## fx-119.0.0`  |
| `esr-` | Firefox ESR        | `## esr-128.0.0` |
| `ent-` | Firefox Enterprise | `## ent-150.0.0` |

An `## Unreleased` section at the top of the file can be used for upcoming changes.  
When a version ships, the unreleased entries can be moved out of the `## Unreleased` section as level 2 headings to be published:

### Entries

Changelog entries are user-facing to Firefox admins, meaning any changes specific to the docs site itself are mostly irrelevant.
Use the following sections per release and omit any that don't apply:

- `### Added`: new policies or functionality relating to the policy engine
- `### Changed`: anything that modifies policy behavior or defaults
- `### Fixed`: bug fixes, or corrections to documentation
- `### Removed`: removed policies or deprecated functionality

### Example

The following entry is for Firefox release version 119:

```md
## fx-119.0.0

### Added

- `DisableAccounts` policy: Disable account-based services, including sync. ([#68](https://github.com/mozilla/enterprise-admin-reference/pull/68))
```
