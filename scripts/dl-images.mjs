import { mkdirSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const OUT = join(import.meta.dirname, "..", "public", "images");
mkdirSync(OUT, { recursive: true });

const imgs = [
  { name: "hero-panda-bamboo", w: 1600, url: "https://images.unsplash.com/photo-1527118732049-c88155f2107c?w=1600" },
  { name: "panda-forest", w: 800, url: "https://images.unsplash.com/photo-1729862564066-32ab1e358fc7?w=800" },
  { name: "volunteer-feeding", w: 1200, url: "https://images.unsplash.com/photo-1525382455947-f319bc05fb35?w=1200" },
  { name: "dujiangyan-irrigation", w: 800, url: "https://images.unsplash.com/photo-1759046048973-1dab72e28e74?w=800" },
  { name: "mount-qingcheng", w: 800, url: "https://images.unsplash.com/photo-1721817940880-44b36b377b17?w=800" },
];

async function dl(url) {
  const r = await fetch(url, { headers: { "Accept": "image/*", "User-Agent": "curl/8.0" } });
  if (r.ok) return Buffer.from(await r.arrayBuffer());
  return null;
}

for (const { name, w, url } of imgs) {
  const out = join(OUT, `${name}.webp`);
  console.log(`${name}:`);
  let buf = await dl(url);
  if (!buf) {
    console.log(`  unsplash failed, trying picsum...`);
    const pw = Math.max(w, 400);
    buf = await dl(`https://picsum.photos/${pw}/${Math.round(pw * 0.6)}?random=${name.length}`);
    if (!buf) { console.log("  picsum also failed, skipping"); continue; }
  }
  console.log(`  got ${(buf.length / 1024).toFixed(0)} KB`);
  await sharp(buf).resize(w).webp({ quality: 80 }).toFile(out);
  console.log(`  saved ${out}`);
}
console.log("Done.");
