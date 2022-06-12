import getAbsolutePath from "../utils/path/getAbsolutePath.js";
import FileSystemError from '../errors/FileSystemError.js';

export const cd = async (args) => {
  try {
    // if (args.length > 1) {
    //   throw new FileSystemError('err');
    // }
    const newCwd = await getAbsolutePath(args[0]);
    process.chdir(newCwd);
  } catch (error) {
    throw new FileSystemError(`Operation failed: invalid path`);
  }
};
