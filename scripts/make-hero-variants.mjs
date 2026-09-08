import sharp from "sharp";
import { writeFileSync, unlinkSync, existsSync, statSync } from "fs";
import { rename, writeFile } from "fs/promises";
import path from "path";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function overwrite(p, buf) {
  const tmp = p + ".tmp";
  await writeFile(tmp, buf);
  for (let i = 0; i < 8; i++) {
    try { unlinkSync(p); break; } catch (e) { if (e.code === "ENOENT") break; await sleep(300 * (i + 1)); }
  }
  for (let i = 0; i < 8; i++) {
    try { await rename(tmp, p); return; } catch { await sleep(300 * (i + 1)); }
  }
  throw new Error(`failed to replace ${p}`);
}

const dir = "public/images";

// Responsive variants per source image. The hero LCP image gets a full ramp;
// card images only need a 768w cut for their ~665px max display size.
const sources = [
  { file: "hero-panda-bamboo", widths: [1920, 1600, 1280, 960, 768, 480], quality: 72 },
  { file: "volunteer-feeding", widths: [1920, 1280, 768], quality: 62 },
  { file: "mount-qingcheng", widths: [1920, 1280, 768], quality: 58 },
  { file: "dujiangyan-nanqiao-bridge", widths: [768], quality: 62 },
];

for (const { file, widths, quality } of sources) {
  const src = path.join(dir, `${file}.webp`);
  for (const w of widths) {
    const out = path.join(dir, `${file}-${w}.webp`);
    if (existsSync(out)) { console.log(`${file}-${w}: exists, skip`); continue; }
    const buf = await sharp(src).resize({ width: w, withoutEnlargement: true }).webp({ quality, effort: 6 }).toBuffer();
    await overwrite(out, buf);
    console.log(`${file}-${w}: ${(buf.length / 1024).toFixed(1)}KB`);
  }
}
