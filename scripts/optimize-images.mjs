// Convierte los PNG pesados de public/ a WebP en public/img/
// Uso: node scripts/optimize-images.mjs
import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";

const sources = [
  "elisa-dark-last-version.png",
  "elisa-dark-last-version-2.png",
  "dexts-menu.png",
  "dext-bleach.png",
  "dext-harribel.png",
  "notys.png",
  "notys-1.png",
  "notys-fullscreen.png",
  "tailwind-break.png",
  "jade.png",
  "jade1.png",
  "jade-comparator.png",
];

await mkdir("public/img", { recursive: true });

for (const file of sources) {
  const out = `public/img/${file.replace(/\.png$/, ".webp")}`;
  await sharp(`public/${file}`)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(out);
  const [before, after] = await Promise.all([stat(`public/${file}`), stat(out)]);
  console.log(
    `${file}: ${(before.size / 1024) | 0}KB -> ${(after.size / 1024) | 0}KB`,
  );
}
