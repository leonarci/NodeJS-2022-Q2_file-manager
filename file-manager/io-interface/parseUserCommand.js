export const parseUserCommand = async (line) => {
  const lineTrimed = line.trim();
  const regexpForSpacesInPath = /(?<![\\])\s/g;
  const inputArray = lineTrimed.split(regexpForSpacesInPath);

  const command = inputArray.shift();
  const args = inputArray;

  const regexpForRemovingSapacesInPath = /\\(?=\s)/g;
  const argsParsed = args.map(arg => { return arg.replaceAll(regexpForRemovingSapacesInPath, ''); });
  const commandObject = {
    command,
    args: argsParsed
  };
  return commandObject;
};
