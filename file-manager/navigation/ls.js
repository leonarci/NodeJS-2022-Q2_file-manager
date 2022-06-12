import { readdir } from 'fs/promises';

export const ls = async () => {
  const files = await readdir(process.cwd());
  return files;
};
