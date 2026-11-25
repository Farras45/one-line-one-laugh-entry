// One Line, One Laugh — entry program (final revision).
// Writes a single original funny line to /output/entry.txt.
// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Final line, revised from the draft. The draft ("I asked my GPS for the
// scenic route, and it drove me past my ex's house twice.") spent its first
// seven words on flat setup. This revision cuts it to 66 characters: "My
// GPS heard 'scenic route'" personifies the GPS and drops the asking, so
// the reader is at the joke sooner and the punch — past my ex's house,
// twice — lands harder. Same image, tighter wording, every word earning
// its place.
const line =
  "My GPS heard 'scenic route' and drove me past my ex's house twice.";

// Gate check on the exact text that will be written.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`wrote ${line.length} chars to ${join(outDir, "entry.txt")}`);
console.log(line);
