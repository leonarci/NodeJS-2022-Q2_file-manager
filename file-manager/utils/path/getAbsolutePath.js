import { isAbsolute, resolve } from 'path';

export default function getAbsolutePath(path) {
  if (isAbsolute(path)) {
    return path;
  } else {
    return resolve(process.cwd(), path);
  }
}
