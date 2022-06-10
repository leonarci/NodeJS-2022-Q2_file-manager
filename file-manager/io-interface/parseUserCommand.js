export const parseUserCommand = async (line) => {
  const lineTrimed = line.trim();
  const inputArray = lineTrimed.split(' ');
  const command = inputArray.shift();
  const args = inputArray;
  const commandObject = {
    command,
    args
  };
  return commandObject;
};
