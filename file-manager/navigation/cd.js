import getAbsolutePath from "../utils/path/getAbsolutePath.js";

export const cd = async (args) => {
  try {
    if (args.length > 1) {
      throw new Error('err');
    }
    const newCwd = await getAbsolutePath(args[0]);
    process.chdir(newCwd);
  } catch (error) {
    throw new Error(`Operation failed: invalid path`);
  }
};
