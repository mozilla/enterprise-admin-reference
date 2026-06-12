#!/usr/bin/env node
import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

// Upstream configs
const REPO = "mozilla/enterprise-firefox";
const BRANCH = "enterprise-main";
const SCHEMA_FILE = "browser/components/enterprisepolicies/schemas/policies-schema.json";
const SCHEMA_URL = `https://raw.githubusercontent.com/${REPO}/${BRANCH}/${SCHEMA_FILE}`;
const COMMIT_URL = `https://api.github.com/repos/${REPO}/commits/${BRANCH}`;

// Local configs
const SCHEMA_DIR = "schema";
const JSON_PATH = join(SCHEMA_DIR, "policies-schema.json");
const META_PATH = join(SCHEMA_DIR, ".source.json");

async function main() {
  const res = await fetch(SCHEMA_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch schema: ${res.status} ${res.statusText}`);
  }
  const raw = await res.text();
  const parsed = JSON.parse(raw);

  const commitRes = await fetch(COMMIT_URL, {
    headers: { Accept: "application/vnd.github.sha" },
  });

  if (!commitRes.ok) {
    throw new Error(`Failed to resolve commit: ${commitRes.status} ${commitRes.statusText}`);
  }

  const commit = (await commitRes.text()).trim();

  await mkdir(SCHEMA_DIR, { recursive: true });
  await writeFile(JSON_PATH, raw);
  await writeFile(
    META_PATH,
    JSON.stringify(
      {
        url: SCHEMA_URL,
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
