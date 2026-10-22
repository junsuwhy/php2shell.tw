import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

export interface ImageSlotDef {
  id: string;
  file: string;
  where: string;
  aspect: string;
  alt: string;
  prompt: string;
  status: 'pending' | 'generated';
}

const root = process.cwd();
const registry = parse(readFileSync(join(root, 'src/data/images.yaml'), 'utf8')) as { slots: ImageSlotDef[] };

export function getSlot(id: string) {
  const slot = registry.slots.find((s) => s.id === id);
  if (!slot) throw new Error(`images.yaml 沒有登記圖片位置：${id}`);
  const ready = existsSync(join(root, 'public/images', slot.file));
  return { ...slot, ready, src: `/images/${slot.file}` };
}
