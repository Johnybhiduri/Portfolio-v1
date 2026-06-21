// Globs every image in the single shared folder, keyed by filename (no
// extension, case-insensitive) — so resumeData.ts can reference images by
// name without caring about their exact extension or import path.
const allImages = import.meta.glob(
  '../assets/project/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}',
  { eager: true, import: 'default' }
) as Record<string, string>;

const imagesByName: Record<string, string> = {};
for (const path in allImages) {
  const filename = path.split('/').pop() ?? '';
  const nameNoExt = filename.replace(/\.[^.]+$/, '').toLowerCase();
  imagesByName[nameNoExt] = allImages[path];
}

/** Look up one image by filename, e.g. img('aod1') matches aod1.webp, aod1.png, etc. */
export function img(name: string): string {
  const key = name.replace(/\.[^.]+$/, '').toLowerCase();
  const found = imagesByName[key];
  if (!found) {
    console.warn(`[projectImages] "${name}" not found. Available: ${Object.keys(imagesByName).join(', ')}`);
  }
  return found ?? '';
}

/** Look up several images at once, skipping any that don't resolve. */
export function imgs(...names: string[]): string[] {
  return names.map(img).filter(Boolean);
}