import { isAbsolute, resolve } from 'path';

export default async function getAbsolutePath(path) {
  if (isAbsolute(path)) {
    const resolvedPath = path;
    return resolvedPath;
  } else {
    const resolvedPath = resolve(process.cwd(), path);
    return resolvedPath;
  }
}
