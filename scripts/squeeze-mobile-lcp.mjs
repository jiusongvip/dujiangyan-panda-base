import sharp from "sharp";
import { writeFileSync, unlinkSync } from "fs";
import { rename, writeFile } from "fs/promises";

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

// Mobile LCP path: squeeze the small hero cuts and the lazy volunteer slide.
const jobs = [
  { file: "hero-panda-bamboo-480.webp", q: 64 },
  { file: "hero-panda-bamboo-768.webp", q: 66 },
  { file: "hero-panda-bamboo-960.webp", q: 68 },
  { file: "volunteer-feeding-768.webp", q: 55 },
];

for (const { file, q } of jobs) {
  const p = `public/images/${file}`;
  const buf = await sharp(p).webp({ quality: q, effort: 6 }).toBuffer();
  await overwrite(p, buf);
  console.log(`${file} q${q}: ${(buf.length / 1024).toFixed(1)}KB`);
}
