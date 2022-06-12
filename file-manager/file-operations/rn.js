import { rename } from 'fs/promises';
import getAbsolutePath from "../utils/path/getAbsolutePath.js";
import { existFile } from "../utils/path/existFile.js";

export const rn = async (userInputPaths) => {
  const pathToFileToRename = await getAbsolutePath(userInputPaths[0]);
  const pathToRenamedFile = await getAbsolutePath(userInputPaths[1]);
  if (await existFile(pathToRenamedFile)) throw new Error('Operation failed: such file already exists');
  await rename(pathToFileToRename, pathToRenamedFile);
  return (`file renamed`);
};
