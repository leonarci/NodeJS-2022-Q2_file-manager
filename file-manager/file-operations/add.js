import { open } from 'fs/promises';
import getAbsolutePath from "../utils/path/getAbsolutePath.js";
import FileSystemError from '../errors/FileSystemError.js';

export const add = async (userInputPath) => {
  try {
    const pathToFile = await getAbsolutePath(userInputPath[0]);
    const fh = await open(pathToFile, 'ax').catch(() => {
      throw new FileSystemError('Operation failed: file already exists');
    });
    fh.close();
    return ('file created');
  } catch (error) {
    throw new FileSystemError('Operation failed');;
  }
};
