import { user } from '../cache/user.js';
import { EOL } from 'os';

const username = user.username;

const helloMessage = `Welcome to the File Manager, ${username}! ${EOL}`;
const goodbyeMessage = `Thank you for using File Manager, ${username}!`;
const getWorkingDirMessage = () => {
  const messageStart = 'You are currently in';
  const promptMessage = `${messageStart} ${process.cwd()} ${EOL}`;
  return promptMessage;
};

export { helloMessage, goodbyeMessage, getWorkingDirMessage };
