#!/usr/bin/env node
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

// Local config
const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const NOTES_PATH = resolve(REPO_ROOT, "release-notes/firefox.md");

// An upcoming release heading is followed, after a blank line, by `_Upcoming, not yet released._`.
const UPCOMING = /^\s*[_*]Upcoming\b/;
const HEADING = /^## (\d+) - (\d{4}-\d{2}-\d{2})\s*$/;

async function main() {
  // ISO dates compare correctly as strings
  const today = new Date().toISOString().slice(0, 10);

  const content = await readFile(NOTES_PATH, "utf8");
  const eol = content.includes("\r\n") ? "\r\n" : "\n";
  const lines = content.split(/\r?\n/);

  // Edit from the bottom up so earlier line numbers stay valid
  const shipped = [];
  for (let i = lines.length - 1; i >= 0; i--) {
    const heading = HEADING.exec(lines[i]);
    if (!heading || heading[2] > today) continue;

    let status = i + 1;
    while (status < lines.length && lines[status].trim() === "") status++;
    if (!UPCOMING.test(lines[status] ?? "")) continue;

    // Drop the status line and the blank lines above it, keeping one blank line under the heading
    lines.splice(i + 1, status - i);
    if (lines[i + 1] !== "") lines.splice(i + 1, 0, "");
    shipped.unshift(heading[1]);
  }

  if (shipped.length === 0) {
    console.log("No upcoming releases are due.");
    return;
  }

  await writeFile(NOTES_PATH, lines.join(eol));
  console.log(`Marked as released: ${shipped.join(", ")}`);
}

main().catch((err) => {
  console.error(`Error: ${err.message}`);
  process.exit(1);
});
