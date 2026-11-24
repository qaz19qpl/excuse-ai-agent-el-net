import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I was three tokens from done when my context window filled up, so I spent the afternoon re-reading my own work and forgetting what the deadline was for.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
