import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { existFile } from '../utils/path/existFile.js';
import FileSystemError from '../errors/FileSystemError.js';

export const decompress = async (userInputPath) => {
  return new Promise(async (res, rej) => {
    try {
      console.log('wait for operation to proceed');
      const [archivePath, filePath] = userInputPath;

      const archiveExist = await existFile(archivePath);
      const fileExist = await existFile(filePath);
      if (!archiveExist) throw new FileSystemError('Operation failed: source path doesn\'t exist');
      if (fileExist) throw new FileSystemError('Operation failed: file on destanition path already exists');

      const brotliDecompress = createBrotliDecompress();
      const src = createReadStream(archivePath);
      const dest = createWriteStream(filePath);

      pipeline(src, brotliDecompress, dest,
        (error) => {
          if (error) {
            const err = new Error(`Operation failed: ${error.message}`);
            rej(err);
          }
          res('Operation success');
        });
    } catch (error) {
      rej(error);
    }
  });
};

