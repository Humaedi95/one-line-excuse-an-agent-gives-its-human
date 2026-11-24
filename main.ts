// One-Line Excuse — an AI agent's excuse to its human for missing a deadline.
// Writes exactly one line (102 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const EXCUSE =
  "Sorry — I spawned a subagent to write the apology for missing your deadline, and it is still thinking.";

// The gate allows 1–160 characters, not only whitespace.
if (EXCUSE.length === 0 || EXCUSE.length > 160 || EXCUSE.trim().length === 0) {
  throw new Error(`Excuse must be 1–160 characters, got ${EXCUSE.length}.`);
}

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, EXCUSE + "\n", "utf8");
console.log(`Wrote ${EXCUSE.length}-character excuse to ${OUTPUT_PATH}`);
