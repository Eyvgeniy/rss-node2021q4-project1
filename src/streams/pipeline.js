import { pipeline } from 'stream/promises';
import TransformCipher from './transformStream.js';
import cipher from '../ciphers/index.js';

const run = async (inputStream, outputStream, config) => {
  const transformStream = new TransformCipher({}, cipher(config));

  await pipeline(inputStream, transformStream, outputStream);
};

export default run;
