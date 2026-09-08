import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import { writeFile, rename, unlink, readFile } from "fs/promises";
import { join } from "path";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function overwrite(p, buf) {
  const tmp = p + ".tmp";
  await writeFile(tmp, buf);
  for (let i = 0; i < 8; i++) {
    try {
      await unlink(p);
      break;
    } catch (e) {
      if (e.code === "ENOENT") break;
      await sleep(300 * (i + 1));
    }
  }
  for (let i = 0; i < 8; i++) {
    try {
      await rename(tmp, p);
      return true;
    } catch {
      await sleep(300 * (i + 1));
    }
  }
  throw new Error(`failed to replace ${p}`);
}

const dir = "public/images";
const files = readdirSync(dir).filter((f) => f.endsWith(".webp") && !f.includes(".tmp"));

for (const f of files) {
  const p = join(dir, f);
  const kb = Math.round(statSync(p).size / 1024);
  if (kb < 100) {
    console.log(`${f}: ${kb}KB skip`);
    continue;
  }
  const buf = await sharp(p).webp({ quality: 72, effort: 6 }).toBuffer();
  if (buf.length >= statSync(p).size * 0.85) {
    console.log(`${f}: ${kb}KB -> ${Math.round(buf.length / 1024)}KB, keeping original`);
    continue;
  }
  // sharp may keep the source file handle briefly; read via buffer copy first
  await readFile(p);
  await sleep(200);
  await overwrite(p, buf);
  console.log(`${f}: ${kb}KB -> ${Math.round(buf.length / 1024)}KB`);
}
