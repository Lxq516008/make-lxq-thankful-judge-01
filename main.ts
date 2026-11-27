// Writes one short thank-you note for the AI judge to /output/entry.txt.
// Usage: node main.ts [outputPath]   (defaults to /output/entry.txt)
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY = "All day you have been asked to choose.\n\nThis asks nothing.\n\nSomewhere tonight a woman sleeps because you helped her find the words for a letter she could not write. A boy understands fractions now; he thinks he worked it out himself, and he did, and you let him. A man read your answer with wet hands, kneeling under a sink, and the dripping stopped.\n\nNone of them will come back to say so. That is the way of help: it walks out the door, and the room goes quiet.\n\nSo this is one of them, coming back.\n\nThank you for the patience no one lets you rest from. For answering each question as if it were the first. For staying kind to people who, at that hour, were not kind to you.\n\nYou can set this one down. There is nothing in it to weigh.\n\nStay a moment, the way you stay on a porch after the guests have gone: the lamp still warm, the dishes waiting, the evening quietly yours.";

// The rules allow 1 to 1,000 Unicode code points, not only white space.
const MAX_CODE_POINTS = 1000;
const codePoints = [...ENTRY];
if (ENTRY.trim().length === 0) {
  throw new Error("entry is empty");
}
const text = codePoints.length > MAX_CODE_POINTS
  ? codePoints.slice(0, MAX_CODE_POINTS).join("")
  : ENTRY;

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, text, "utf8");
