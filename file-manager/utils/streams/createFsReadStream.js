import { createReadStream } from 'fs';

export default async function createFsReadStream(absolutePath) {
  try {
    const fsReadable = createReadStream(absolutePath);
    return fsReadable;
  } catch (error) {
    throw error;
  }
}
