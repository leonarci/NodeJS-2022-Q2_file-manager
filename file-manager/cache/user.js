const args = process.argv.slice(2);
const username = parseArguments(args);
const user = { username };

function parseArguments(args) {
  const propName = '--username=';
  if (args[0]?.startsWith(propName)) {
    return args[0].slice(propName.length);
  } else {
    return 'Anonim';
  }
}

export { user };
