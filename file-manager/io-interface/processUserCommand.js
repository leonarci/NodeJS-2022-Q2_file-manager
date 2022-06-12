import { rl } from './readline.js';
import { up } from '../navigation/up.js';
import { ls } from '../navigation/ls.js';
import { cd } from '../navigation/cd.js';
import { cat } from '../file-operations/cat.js';
import { add } from '../file-operations/add.js';
import { rn } from '../file-operations/rn.js';
import { cp } from '../file-operations/cp.js';
import { mv } from '../file-operations/mv.js';
import { rm } from '../file-operations/rm.js';
import { hash } from '../hash/hash.js';
import { os } from '../os-info/os.js';
import { compress } from '../compression/compress.js';
import { decompress } from '../compression/decompress.js';
import { getWorkingDirMessage } from './messages.js';
import { EOL } from 'os';

export const processUserCommand = async (validCommandObject) => {
  const { command, args } = validCommandObject;
  let promptMessage;
  let commandResult;
  switch (command) {
    case 'up':
      await up();
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
    case 'cat':
      await cat(args);
      console.log(EOL);
      break;
    case 'add':
      commandResult = await add(args);
      return commandResult;
    case 'rn':
      commandResult = await rn(args);
      return commandResult;
    case 'cp':
      commandResult = await cp(args);
      return commandResult;
    case 'mv':
      commandResult = await mv(args);
      return commandResult;
    case 'rm':
      commandResult = await rm(args);
      return commandResult;
    case 'hash':
      commandResult = await hash(args);
      return commandResult;
    case 'compress':
      commandResult = await compress(args);
      return commandResult;
    case 'decompress':
      commandResult = await decompress(args);
      return commandResult;
    case 'os':
      commandResult = await os(args);
      return commandResult;

    case '.exit':
      rl.emit('close');
  }
};
