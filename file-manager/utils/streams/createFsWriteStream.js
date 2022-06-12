import { createWriteStream } from 'fs';

export default async function createFsWriteStream(absolutePath) {
  try {
    const fsReadable = createWriteStream(absolutePath);
    return fsReadable;
  } catch (error) {
    throw error;
  }
}
