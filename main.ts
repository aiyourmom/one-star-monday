// One Star for Monday — a one-star review of Monday as a restaurant.
// Chosen from 3 candidates (see report): the most Monday-specific line.
// Gate: 1 line, at most 25 words, 1-180 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "One star. Booked a table for Monday, got seated next to my alarm clock, and the chef served my weekend raw.";

const words = TEXT.split(/\s+/).filter(Boolean).length;
if (TEXT.includes("\n") || words > 25 || TEXT.length < 1 || TEXT.length > 180) {
  throw new Error(
    `gate violated: ${words} words, ${TEXT.length} chars (need 1 line, <=25 words, 1-180 chars)`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(`wrote ${TEXT.length} characters to ${join(outDir, "entry.txt")}`);
