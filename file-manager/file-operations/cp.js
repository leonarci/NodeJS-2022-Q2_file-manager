import createFsReadStream from '../utils/streams/createFsReadStream.js';
import createFsWriteStream from '../utils/streams/createFsWriteStream.js';
import getAbsolutePath from "../utils/path/getAbsolutePath.js";
import { existFile } from "../utils/path/existFile.js";
import { join, basename } from 'path';
import { stat } from 'fs/promises';

export const cp = async (userInputPaths) => {

  return new Promise(async (res, rej) => {
    try {
      const pathToFile = await getAbsolutePath(userInputPaths[0]);
      const pathToFileStats = await stat(pathToFile).catch(() => {
        throw new Error('Operation failed: no such file');
      });
      const pathToFolder = await getAbsolutePath(userInputPaths[1]);
      const pathToFolderStats = await stat(pathToFolder).catch(() => {
        throw new Error('Operation failed: no such directory');
      });

      if (!pathToFileStats.isFile()) throw new Error('Operation failed: first argument should be type of file');
      if (!pathToFolderStats.isDirectory()) throw new Error('Operation failed: you should enter existed directory path as second argument');
      const fileName = basename(pathToFile);
      const pathToFileCopy = join(pathToFolder, fileName);
      if (await existFile(pathToFileCopy)) throw Error('Operation failed: file already exists in given directory');
      const rs = await createFsReadStream(pathToFile);
      const ws = await createFsWriteStream(pathToFileCopy);
      rs.pipe(ws).on('error', error => rej(error));;
      ws.on('close', () => res('file was copied'));
    } catch (error) {
      rej(error);
    }
  });
};
