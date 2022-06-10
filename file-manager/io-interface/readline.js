import { createInterface } from 'readline';
import { helloMessage, goodbyeMessage, getWorkingDirMessage } from './messages.js';
import { parseUserCommand } from './parseUserCommand.js';
import { validateUserCommand } from './validateUserCommand.js';
import { processUserCommand } from './processUserCommand.js';

const HOME_FOLDER = process.env.HOME;
process.chdir(HOME_FOLDER);
let promptMessage = getWorkingDirMessage();

export const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `${promptMessage}`
});

console.log(helloMessage);
rl.prompt(true);

rl.on('line', (line) => {
  (async () => {
    try {
      const commandObject = await parseUserCommand(line);
      const validCommandObject = await validateUserCommand(commandObject);
      await processUserCommand(validCommandObject);
      rl.prompt(true);
    } catch (error) {
      console.log(error.message);
      rl.prompt(true);
    }
  })();
});

rl.on('close', () => {
  console.log(goodbyeMessage);
  process.exit(0);
});
