export const validateArgumenst = async (commandObject) => {
  const { command, args } = commandObject;
  switch (command) {
    case 'up':
      return validateArgumenstLength(args, 0);
    case 'ls':
      return validateArgumenstLength(args, 0);
    case 'cd':
      return validateArgumenstLength(args, 1);
    case 'cat':
      return validateArgumenstLength(args, 1);
    case 'add':
      return validateArgumenstLength(args, 1);
    case 'rn':
      return validateArgumenstLength(args, 2);
    case 'cp':
      return validateArgumenstLength(args, 2);
    case 'mv':
      return validateArgumenstLength(args, 2);
    case 'rm':
      return validateArgumenstLength(args, 1);
    case 'compress':
      return validateArgumenstLength(args, 2);
    case 'decompress':
      return validateArgumenstLength(args, 2);
    case 'hash':
      return validateArgumenstLength(args, 1);
    case '.exit':
      return validateArgumenstLength(args, 0);
  }
};

function validateArgumenstLength(args, numberOfArguments) {
  if (args.length === numberOfArguments) {
    return true;
  } else {
    let errorMessage;
    if (numberOfArguments === 0) {
      errorMessage = 'Invalid input: entered command doesn\'t accept arguments';
    } else if (numberOfArguments === 1) {
      errorMessage = 'Invalid input: entered command requires 1 argument';
    } else if (numberOfArguments === 2) {
      errorMessage = 'Invalid input: entered command requires 2 arguments';
    }
    throw new Error(errorMessage);
  }
}
