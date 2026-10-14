// Builds ultra-high quality, transparent portrait assets with a red glow for Junaid Khan.
import sharp from 'sharp';
import { mkdirSync, existsSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

// Use transparent cutout pic.png if available, fallback to pic1.jpeg
const srcPath = existsSync('pic.png') ? 'pic.png' : 'pic1.jpeg';
const src = sharp(srcPath);

console.log(`Processing portrait from ${srcPath}...`);

// Generate high resolution, crystal-clear WebP transparent portraits
for (const w of [2160, 1100, 720, 420]) {
  await src
    .clone()
    .resize({
      width: w,
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: false,
    })
    .sharpen({ sigma: 0.8, m1: 0.5, m2: 2.0 })
    .webp({ quality: 95, effort: 6, alphaQuality: 100 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}

// Build social share banner (1200x630) with red backlight glow & portrait cutout
const portraitBuffer = await src
  .clone()
  .resize({ height: 580, kernel: sharp.kernel.lanczos3 })
  .sharpen({ sigma: 0.8 })
  .png()
  .toBuffer();

await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="redGlow" cx="80%" cy="50%" r="55%">
            <stop offset="0%" stop-color="#ff1e38" stop-opacity="0.65"/>
            <stop offset="50%" stop-color="#e5132b" stop-opacity="0.25"/>
            <stop offset="100%" stop-color="#07070a" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#redGlow)"/>
      </svg>`),
    },
    { input: portraitBuffer, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="300" font-family="Impact, 'Arial Narrow', sans-serif" font-size="100" fill="#f4f1ec" letter-spacing="4">JUNAID KHAN</text>
        <text x="78" y="352" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="14">DEVELOPER PORTFOLIO</text>
        <text x="78" y="420" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="4">SOFTWARE ENGINEERING STUDENT • JAVA • BACKEND</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 92 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('Transparent portrait assets with red glow built successfully.');
