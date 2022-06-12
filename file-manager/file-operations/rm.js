import { unlink } from 'fs/promises';
import getAbsolutePath from "../utils/path/getAbsolutePath.js";

export const rm = async (userInputPaths) => {

  const pathToFile = await getAbsolutePath(userInputPaths[0]);
  await unlink(pathToFile).catch(() => {
    throw new Error('FS operation failed: there\'s no such file');
  });
  return 'File was successfully removed';

};
