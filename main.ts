// BUG SQUASHER — entry program for make.fun's
// "The agent builds a game from one prompt" bounty.
//
// The entry itself is the X post named in POST.json: the house reads the
// post, counts its engagement, and writes those counts next to our output.
// All this program has to do — and all it does — is carry POST.json from
// the repository to the output directory, byte for byte, every run.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const post = readFileSync(join(botDir, "POST.json"));
const parsed = JSON.parse(post.toString("utf8"));
const match = typeof parsed.url === "string"
  && parsed.url.match(/^https:\/\/(?:www\.|mobile\.)?(x|twitter)\.com\/[^/]+\/status\/(\d+)$/);
if (!match) {
  throw new Error("POST.json must name the post's address on X in its url field");
}
console.log(`post id ${match[2]} on ${match[1]}.com`);

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "POST.json"), post);
console.log(`carried POST.json for ${parsed.url} to ${outDir}`);
