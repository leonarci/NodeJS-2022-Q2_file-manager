import { validateArgumenst } from './validateArgumenst.js';
import FileSystemError from '../errors/FileSystemError.js';

const VALID_COMMANDS = ['cd', 'ls', 'up', '.exit', 'cat', 'add', 'rn', 'cp', 'mv', 'rm', 'hash', 'compress', 'decompress', 'os'];

export const validateUserCommand = async (commandObject) => {
  if (VALID_COMMANDS.includes(commandObject.command)) {
    const argumentsValid = await validateArgumenst(commandObject);
    if (argumentsValid) {
      return commandObject;
    } else {
      throw new FileSystemError(`Invalid arguments: '${commandObject.args}'`);
    }
  }
  throw new FileSystemError(`Invalid input: '${commandObject.command}'`);
};
