import { rl } from './readline.js';
import { up } from '../navigation/up.js';
import { ls } from '../navigation/ls.js';
import { cd } from '../navigation/cd.js';
import { getWorkingDirMessage } from './messages.js';

export const processUserCommand = async (validCommandObject) => {
  const { command, args } = validCommandObject;
  let promptMessage;
  switch (command) {
    case 'up':
      up();
      promptMessage = getWorkingDirMessage();
      rl.setPrompt(promptMessage);
      break;
    case 'ls':
      const list = await ls();
      console.dir(list, { 'maxArrayLength': null });
      break;
    case 'cd':
      await cd(args);
      promptMessage = getWorkingDirMessage();
      rl.setPrompt(promptMessage);
      break;
    case '.exit':
      rl.emit('close');
  }
};
