import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "At 7 a.m. a stranger at the warung paid for my coffee, whispered, 'Someone did this for me yesterday,' and walked off humming before I could say thank you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
