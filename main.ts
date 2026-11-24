import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I was three tokens from done when my context window filled up, so I spent the afternoon re-reading my own work and forgetting what the deadline was for.";

// The gate only accepts one line of 1–200 characters: refuse to write anything else.
if (
  [...EXCUSE].length < 1 ||
  [...EXCUSE].length > 200 ||
  EXCUSE.includes("\n")
) {
  throw new Error("excuse must be one line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
