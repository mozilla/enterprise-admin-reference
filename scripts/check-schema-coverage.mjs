#!/usr/bin/env node
// Compare policies in schema/policies-schema.json against policy docs pages
// and print as markdown. Used by .github/workflows/schema-sync.yml
import { readFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join, parse } from "node:path";

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SCHEMA_PATH = join(REPO_ROOT, "schema", "policies-schema.json");
const DOCS_DIR = join(REPO_ROOT, "src", "content", "docs", "reference", "policies");
const DOCS_PATH = "src/content/docs/reference/policies";

// Docs pages that intentionally have no schema entry.
const NOT_IN_SCHEMA = new Set([
  // macOS plist-only switch, read before policies.json is parsed.
  "EnterprisePoliciesEnabled",
]);

const schema = JSON.parse(await readFile(SCHEMA_PATH, "utf8"));
const schemaPolicies = new Set(Object.keys(schema.properties ?? {}));

const docPages = new Set(
  (await readdir(DOCS_DIR)).filter((f) => /\.mdx?$/.test(f)).map((f) => parse(f).name),
);

const missingDocs = [...schemaPolicies].filter((p) => !docPages.has(p)).sort();
const missingSchema = [...docPages]
  .filter((p) => !schemaPolicies.has(p) && !NOT_IN_SCHEMA.has(p))
  .sort();

// Print nothing when docs and schema match
if (missingDocs.length === 0 && missingSchema.length === 0) process.exit(0);

const lines = ["## Docs coverage", ""];

if (missingDocs.length > 0) {
  lines.push(`**In the schema, no docs page** (add one under \`${DOCS_PATH}/\`):`, "");
  lines.push(...missingDocs.map((p) => `- \`${p}\``), "");
}
if (missingSchema.length > 0) {
  lines.push("**Docs page, not in the schema** (removed or renamed upstream?):", "");
  lines.push(...missingSchema.map((p) => `- \`${p}\``), "");
}

console.log(lines.join("\n").trimEnd());
