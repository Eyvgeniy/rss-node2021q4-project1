import fs from 'fs';
import { argv } from 'process';
import pipeline from './streams/pipeline.js';
import validateFiles from './validateFiles.js';
import parseArgs from './parseParams.js';

export default () => {
  const [, , ...cliArgs] = argv;
  const { input, output, config } = parseArgs(cliArgs);

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

  pipeline(inputStream, outputStream, config).catch(process.stderr.write);
};
