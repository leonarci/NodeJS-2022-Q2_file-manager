import { validateArgumenst } from './validateArgumenst.js';

const VALID_COMMANDS = ['cd', 'ls', 'up', '.exit', 'cat', 'add', 'rn', 'cp', 'mv', 'rm'];

export const validateUserCommand = async (commandObject) => {
  if (VALID_COMMANDS.includes(commandObject.command)) {
    const argumentsValid = await validateArgumenst(commandObject);
    if (argumentsValid) {
      return commandObject;
    } else {
      throw new Error(`Invalid arguments: '${commandObject.args}'`);
    }
  }
  throw new Error(`Invalid input: '${commandObject.command}'`);
};
