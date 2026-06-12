#!/usr/bin/env node
import { writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";

// Upstream config
const REPO = "mozilla/enterprise-firefox";
const BRANCH = "enterprise-main";
const SCHEMA_FILE = "browser/components/enterprisepolicies/schemas/policies-schema.json";
const SOURCE_URL = `https://raw.githubusercontent.com/${REPO}/${BRANCH}/${SCHEMA_FILE}`;
const COMMIT_URL = `https://api.github.com/repos/${REPO}/commits/${BRANCH}`;

// Local config
const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SCHEMA_DIR = resolve(REPO_ROOT, "schema");
const JSON_PATH = join(SCHEMA_DIR, "policies-schema.json");
const META_PATH = join(SCHEMA_DIR, ".source.json");

async function main() {
  // Get the commit SHA first
  const commitRes = await fetch(COMMIT_URL, {
    headers: { Accept: "application/vnd.github.sha" },
  });
  if (!commitRes.ok) {
    throw new Error(`Failed to resolve commit: ${commitRes.status} ${commitRes.statusText}`);
  }
  const commit = (await commitRes.text()).trim();

  // Then fetch the schema
  const schemaUrl = `https://raw.githubusercontent.com/${REPO}/${commit}/${SCHEMA_FILE}`;
  const res = await fetch(schemaUrl);
  if (!res.ok) {
    throw new Error(`Failed to fetch schema: ${res.status} ${res.statusText}`);
  }

  const raw = await res.text();
  const parsed = JSON.parse(raw);

  await mkdir(SCHEMA_DIR, { recursive: true });

  await writeFile(JSON_PATH, raw);
  await writeFile(
    META_PATH,
    JSON.stringify(
      {
        url: SOURCE_URL,
        commit,
        permalink: `https://github.com/${REPO}/blob/${commit}/${SCHEMA_FILE}`,
      },
      null,
      2,
    ) + "\n",
  );

  const policyCount = Object.keys(parsed.properties ?? {}).length;

  console.log(`Schema fetched: ${policyCount} policies`);
}

main().catch((err) => {
  console.error(`Error: ${err.message}`);
  process.exit(1);
});
