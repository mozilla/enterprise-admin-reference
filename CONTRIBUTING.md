# Contributing

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
