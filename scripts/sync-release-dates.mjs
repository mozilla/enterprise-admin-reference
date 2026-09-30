#!/usr/bin/env node
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

// Upstream only lists a version when it's shipped
const RELEASES_URL = "https://product-details.mozilla.org/1.0/firefox_history_major_releases.json";

// Local config
const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const NOTES_PATH = resolve(REPO_ROOT, "release-notes/firefox.md");

// An upcoming release heading is followed, after a blank line, by `_Upcoming, not yet released._`.
const UPCOMING = /^\s*[_*]Upcoming\b/;
const HEADING = /^## (\d+) - (\d{4}-\d{2}-\d{2})\s*$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

async function main() {
  const res = await fetch(RELEASES_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch releases: ${res.status} ${res.statusText}`);
  }
  const releases = await res.json();

  const content = await readFile(NOTES_PATH, "utf8");
  const eol = content.includes("\r\n") ? "\r\n" : "\n";
  const lines = content.split(/\r?\n/);

  // Find each dated heading's Upcoming line before editing anything
  const upcoming = [];
  for (let i = 0; i < lines.length; i++) {
    const heading = HEADING.exec(lines[i]);
    if (!heading) continue;

    let status = i + 1;
    while (status < lines.length && lines[status].trim() === "") status++;
    if (UPCOMING.test(lines[status] ?? "")) {
      upcoming.push({ index: i, status, version: heading[1], expected: heading[2] });
    }
  }

  // Any other Upcoming line would never be updated, so fail rather than skip it
  const known = new Set(upcoming.map(({ status }) => status));
  const stray = lines.filter((line, n) => UPCOMING.test(line) && !known.has(n));
  if (stray.length > 0) {
    throw new Error(
      `Upcoming line not directly under a \`## N - YYYY-MM-DD\` heading: ${stray.join(" | ")}`,
    );
  }

  // Edit from the bottom up so earlier line numbers stay valid
  const shipped = [];
  for (const { index, status, version, expected } of upcoming.reverse()) {
    const released = releases[`${version}.0`];
    if (!released) continue;
    if (!ISO_DATE.test(released)) {
      throw new Error(`Unexpected date for ${version}.0 in product-details: ${released}`);
    }

    lines[index] = `## ${version} - ${released}`;
    // Drop the status line and the blank lines above it, keeping one blank line under the heading
    lines.splice(index + 1, status - index);
    if (lines[index + 1] !== "") lines.splice(index + 1, 0, "");
    shipped.unshift(
      released === expected ? version : `${version} (moved from ${expected} to ${released})`,
    );
  }

  if (shipped.length === 0) {
    console.log("No upcoming releases have shipped.");
    return;
  }

  await writeFile(NOTES_PATH, lines.join(eol));
  console.log(`Marked as released: ${shipped.join(", ")}`);
}

main().catch((err) => {
  console.error(`Error: ${err.message}`);
  process.exit(1);
});
