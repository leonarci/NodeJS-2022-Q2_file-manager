import { cp } from './cp.js';
import { rm } from './rm.js';
import FileSystemError from '../errors/FileSystemError.js';

export const mv = async (userInputPaths) => {
  try {
    await cp(userInputPaths);
    await rm(userInputPaths);
    return 'File was successfully moved';
  } catch (error) {

    throw new FileSystemError(`${error.message}`);
  }

};
