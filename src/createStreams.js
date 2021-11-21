import fs from 'fs';
import validateFiles from './validateFiles.js';

export default (input, output) => {
  let inputStream;
  let outputStream;

  if (input === undefined) {
    inputStream = process.stdin;
  } else {
    validateFiles(input, 'input');
    inputStream = fs.createReadStream(input);
  }

  if (output === undefined) {
    outputStream = process.stdout;
  } else {
    validateFiles(output, 'output');
    outputStream = fs.createWriteStream(output, { flags: 'a' });
  }

  return { inputStream, outputStream };
};
