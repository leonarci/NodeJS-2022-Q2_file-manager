import getAbsolutePath from "../utils/path/getAbsolutePath.js";

export async function up() {
  const newCwd = await getAbsolutePath('..');
  process.chdir(newCwd);
}
