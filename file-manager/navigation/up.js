import getAbsolutePath from "../utils/path/getAbsolutePath.js";

export function up() {
  const newCwd = getAbsolutePath('..');
  process.chdir(newCwd);
}
