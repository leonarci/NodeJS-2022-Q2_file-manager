import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { existFile } from '../utils/path/existFile.js';
import FileSystemError from '../errors/FileSystemError.js';


export const compress = async (userInputPath) => {
  return new Promise(async (res, rej) => {
    try {
      console.log('wait for operation to proceed');
      const [filePath, archivePath] = userInputPath;

      const fileExist = await existFile(filePath);
      const archiveExist = await existFile(archivePath);
      if (!fileExist) throw new FileSystemError('Operation failed: source path doesn\'t exist');
      if (archiveExist) throw new FileSystemError('Operation failed: file on destanition path already exists');

      const brotliCompress = createBrotliCompress();
      const src = createReadStream(filePath);
      const dest = createWriteStream(archivePath);
      pipeline(src, brotliCompress, dest, (error) => {
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
