import sharp from 'sharp';
import { resolve } from 'path';
import { existsSync } from 'fs';

async function main() {
  const input = resolve(process.cwd(), 'static', 'projects_wireframe.svg');
  const output = resolve(process.cwd(), 'static', 'projects_wireframe.png');

  if (!existsSync(input)) {
    console.error('Input SVG not found at', input);
    process.exit(1);
  }

  // Render at higher density for crisp text/lines, then scale to 1800x1080
  const width = 1800;
  const height = 1080;

  try {
    await sharp(input, { density: 288 })
      .resize(width, height, { fit: 'cover' })
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(output);

    console.log('PNG written to', output);
  } catch (err) {
    console.error('Failed to render PNG:', err);
    process.exit(1);
  }
}

main();

