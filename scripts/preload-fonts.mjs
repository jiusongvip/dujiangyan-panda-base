// Post-build: inject <link rel="preload" as="font"> for the two latin variable
// fonts used above the fold. Font URLs are content-hashed by Astro/Vite, so we
// extract them from the built HTML (CSS is inlined) instead of hardcoding.
// Latin subsets cover all site copy; other subsets load on demand via CSS.
import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

const dist = "dist";
const files = readdirSync(dist, { recursive: true }).filter((f) => f.endsWith(".html"));
if (files.length === 0) throw new Error("no html files in dist");

// Collect font URLs from any built page's inlined CSS
const first = readFileSync(join(dist, files[0]), "utf8");
const urlRe = /url\((\/_astro\/[^"')]+\.woff2)\)/g;
const urls = [...new Set([...first.matchAll(urlRe)].map((m) => m[1]))];
const critical = urls.filter((u) => /^\/_astro\/(geist|fraunces)-latin-wght-normal\./.test(u));
if (critical.length === 0) throw new Error("latin font URLs not found: " + urls.join(", "));

const preloads = critical
  .map((u) => `<link rel="preload" as="font" type="font/woff2" href="${u}" crossorigin>`)
  .join("");

let injected = 0;
for (const f of files) {
  const p = join(dist, f);
  let html = readFileSync(p, "utf8");
  if (html.includes('rel="preload" as="font"')) continue;
  if (!html.includes("<head>")) continue;
  html = html.replace("<head>", "<head>" + preloads);
  writeFileSync(p, html);
  injected++;
}
console.log(`preload-fonts: injected ${preloads.split("<link").length - 1} font preload(s) into ${injected} page(s)`);
