import { open } from 'fs/promises';
import getAbsolutePath from "../utils/path/getAbsolutePath.js";

export const add = async (userInputPath) => {
  try {
    const pathToFile = await getAbsolutePath(userInputPath[0]);
    const fh = await open(pathToFile, 'ax').catch(() => {
      throw new Error('Operation failed: file already exists');
    });
    fh.close();
    return ('file created');
  } catch (error) {
    throw error;
  }
};
