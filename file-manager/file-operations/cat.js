import createFsReadStream from '../utils/streams/createFsReadStream.js';
import getAbsolutePath from "../utils/path/getAbsolutePath.js";

export const cat = async (userInputPath) => {
  try {
    return new Promise(async (res, rej) => {
      const pathToFile = await getAbsolutePath(userInputPath[0]);
      const rs = await createFsReadStream(pathToFile);
      rs.pipe(process.stdout);
      rs.on('close', () => {
        res();
      });
      rs.on('error', error => rej(error));

    });
  } catch (error) {
    throw new Error(`Operation failed: invalid path`);
  }
};
