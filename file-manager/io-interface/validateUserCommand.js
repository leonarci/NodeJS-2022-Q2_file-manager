const VALID_COMMANDS = ['cd', 'ls', 'up', '.exit'];

export const validateUserCommand = async (commandObject) => {
  if (VALID_COMMANDS.includes(commandObject.command)) {
    return commandObject;
  }
  throw new Error(`Invalid input: '${commandObject.command}'`);
};
