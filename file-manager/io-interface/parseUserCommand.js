export const parseUserCommand = async (line) => {
  const lineTrimed = line.trim();
  let commandObject, command, argsParsed;
  if (lineTrimed.includes("'")) {
    command = lineTrimed.slice(0, lineTrimed.indexOf(' '));
    const args = lineTrimed.slice(lineTrimed.indexOf(' ') + 1);
    const arrgsArray = args.split("' '");
    argsParsed = arrgsArray.map(arg => {
      let argNormalized = arg.replaceAll("'", '');
      return argNormalized;
    });
  } else {
    const regexpForSpacesInPath = /(?<![\\])\s/g;
    const inputArray = lineTrimed.split(regexpForSpacesInPath);

    command = inputArray.shift();
    const args = inputArray;

    const regexpForRemovingSapacesInPath = /\\(?=\s)/g;
    argsParsed = args.map(arg => { return arg.replaceAll(regexpForRemovingSapacesInPath, ''); });
  }
  commandObject = {
    command,
    args: argsParsed
  };
  return commandObject;
};
