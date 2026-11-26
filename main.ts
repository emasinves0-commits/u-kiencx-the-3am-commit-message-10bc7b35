// The 3AM Commit Message — u-kiencx-the-3am-commit-message-10bc7b35
// Writes the entry (one line, at most 139 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: reverted to yesterday's commit after accidentally optimizing core.js by -60586 lines.";

const MAX_CHARS = 139;

// Fail loudly instead of shipping an over-long line: the gate refuses
// anything above 139 characters, so a silent overrun would score Valid 0.
if (ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
