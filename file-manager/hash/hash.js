import createFsReadStream from '../utils/streams/createFsReadStream.js';
import { createHash } from 'crypto';

export const hash = async (userInputPath) => {

  return new Promise(async (res, rej) => {
    const hash = createHash('sha256');
    const rs = await createFsReadStream(userInputPath[0]);
    rs.on('data', data => {
      hash.update(data);
    });
    rs.on('error', () => rej(new Error('Operation failed')));
    rs.on('end', () => {
      res(hash.digest('hex'));
    });
  });
};

