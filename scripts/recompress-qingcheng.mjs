import sharp from "sharp";
import { writeFileSync, unlinkSync } from "fs";
import { rename } from "fs/promises";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const src = "public/images/mount-qingcheng.webp";
const buf = await sharp(src).webp({ quality: 55, effort: 6 }).toBuffer();
const tmp = src + ".tmp";
writeFileSync(tmp, buf);
for (let i = 0; i < 8; i++) {
  try { unlinkSync(src); break; } catch (e) { if (e.code === "ENOENT") break; await sleep(300 * (i + 1)); }
}
for (let i = 0; i < 8; i++) {
  try { await rename(tmp, src); break; } catch { await sleep(300 * (i + 1)); }
}
console.log("qingcheng q55:", (buf.length / 1024).toFixed(1) + "KB");
