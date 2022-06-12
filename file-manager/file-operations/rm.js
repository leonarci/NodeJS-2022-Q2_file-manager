import { unlink } from 'fs/promises';
import getAbsolutePath from "../utils/path/getAbsolutePath.js";
import FileSystemError from '../errors/FileSystemError.js';

export const rm = async (userInputPaths) => {

  const pathToFile = await getAbsolutePath(userInputPaths[0]);
  await unlink(pathToFile).catch(() => {
    throw new FileSystemError('Operation failed: there\'s no such file');
  });
  return 'File was successfully removed';

};
