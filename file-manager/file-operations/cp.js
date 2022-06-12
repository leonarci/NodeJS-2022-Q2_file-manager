import createFsReadStream from '../utils/streams/createFsReadStream.js';
import createFsWriteStream from '../utils/streams/createFsWriteStream.js';
import getAbsolutePath from "../utils/path/getAbsolutePath.js";
import { existFile } from "../utils/path/existFile.js";
import { join, basename, extname } from 'path';
import { stat } from 'fs/promises';
import FileSystemError from '../errors/FileSystemError.js';

export const cp = async (userInputPaths) => {

  return new Promise(async (res, rej) => {
    try {
      const pathToFile = await getAbsolutePath(userInputPaths[0]);
      const pathToFileStats = await stat(pathToFile).catch(() => {
        throw new FileSystemError('Operation failed: no such file');
      });
      const pathToFolder = await getAbsolutePath(userInputPaths[1]);
      const pathToFolderStats = await stat(pathToFolder).catch(() => {
        throw new FileSystemError('Operation failed: no such directory');
      });

      if (!pathToFileStats.isFile()) throw new FileSystemError('Operation failed: first argument should be type of file');
      if (!pathToFolderStats.isDirectory()) throw new FileSystemError('Operation failed: you should enter existed directory path as second argument');
      const fileExtantion = extname(pathToFile);
      const fileName = basename(pathToFile, fileExtantion);
      let pathToFileCopy = join(pathToFolder, `${fileName}${fileExtantion}`);
      while (await existFile(pathToFileCopy)) {
        pathToFileCopy = join(pathToFolder, `${basename(pathToFileCopy, fileExtantion)}-copy${fileExtantion}`);
      }
      const rs = await createFsReadStream(pathToFile);
      const ws = await createFsWriteStream(pathToFileCopy);
      rs.pipe(ws).on('error', error => rej(error));;
      ws.on('close', () => res('file was copied'));
    } catch (error) {
      rej(error);
    }
  });
};
