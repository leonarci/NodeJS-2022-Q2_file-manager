import createFsReadStream from '../utils/streams/createFsReadStream.js';
import getAbsolutePath from "../utils/path/getAbsolutePath.js";
import FileSystemError from '../errors/FileSystemError.js';

export const cat = async (userInputPath) => {
  try {
    return new Promise(async (res, rej) => {
      const pathToFile = await getAbsolutePath(userInputPath[0]);
      const rs = await createFsReadStream(pathToFile);
      rs.pipe(process.stdout);
      rs.on('close', () => {
        res();
      });
      rs.on('error', () => {
        const err = new FileSystemError(`Operation failed: invalid path`);
        rej(err);
      });

    });
  } catch (error) {
    throw new FileSystemError(`Operation failed: invalid path`);
  }
};
