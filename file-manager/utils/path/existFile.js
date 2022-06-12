import { access } from 'fs/promises';
import { constants } from 'fs';

export async function existFile(filePath) {

  return await access(filePath, constants.F_OK)
    .then(() => true)
    .catch(() => {
      return false;
    });
}
