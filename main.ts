import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke. Gate: /output/entry.txt must be UTF-8 text of
// 1 to 199 characters, not only whitespace. Fail loudly rather than
// shipping an invalid entry.
const JOKE =
  "My boss asked for my honest opinion, then scheduled a meeting to discuss my attitude.";

if (JOKE.length < 1 || JOKE.length > 199 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-199 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
