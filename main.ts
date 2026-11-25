import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One real-life patch note, written to /output/entry.txt.
const ENTRY = "v8.0.1: Fixed sneezes hanging at 99% and then silently cancelling.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
