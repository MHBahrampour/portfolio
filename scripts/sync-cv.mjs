/**
 * Copies the standalone CV (cv/) into Next's public directory, so the same
 * page is served at /cv/ on the main site and, through the domain rewrite in
 * netlify.toml, at the root of https://cv.mhbahrampour.ir/.
 *
 * Runs from `prebuild` / `predev`. The copy is generated, never committed.
 */
import { cp, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = fileURLToPath(new URL("..", import.meta.url));
const source = path.join(repoRoot, "cv");
const target = path.join(repoRoot, "public", "cv");

// `bun run build` inside cv/ writes these; a missing entry means the CV was
// never built after the last edit.
const required = ["index.html", "assets/styles.css", "assets/main.js", "cv.pdf"];

const missing = required.filter((file) => !existsSync(path.join(source, file)));
if (missing.length > 0) {
  console.error(
    `sync-cv: cv/ is missing ${missing.map((file) => `cv/${file}`).join(", ")} — run \`bun run build\` in cv/ first.`,
  );
  process.exit(1);
}

await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
for (const entry of ["index.html", "assets", "cv.pdf"]) {
  await cp(path.join(source, entry), path.join(target, entry), {
    recursive: true,
  });
}

console.log("sync-cv: cv/ → public/cv/");
