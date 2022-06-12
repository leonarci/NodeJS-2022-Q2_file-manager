import { createReadStream } from 'fs';
import FileSystemError from '../../errors/FileSystemError.js';

export default async function createFsReadStream(absolutePath) {
  try {
    const fsReadable = createReadStream(absolutePath);
    return fsReadable;
  } catch (error) {
    throw FileSystemError('Operation failed');
  }
}
