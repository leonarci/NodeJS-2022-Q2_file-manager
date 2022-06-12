import { createWriteStream } from 'fs';
import FileSystemError from '../../errors/FileSystemError.js';

export default async function createFsWriteStream(absolutePath) {
  try {
    const fsReadable = createWriteStream(absolutePath);
    return fsReadable;
  } catch (error) {
    throw new FileSystemError('Operation failed');
  }
}
