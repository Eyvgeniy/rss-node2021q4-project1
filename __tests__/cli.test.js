import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

import pipeStreams from '../src/pipeStreams';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fixTuresPath = path.resolve(__dirname, '..', '__fixtures__');
const inputFilePath = path.resolve(fixTuresPath, 'input.txt');

describe('test cli', () => {
  test('No input file', () => {
    const params = ['-o', './output.txt', '-i', './input.txt', '-c', 'C1-C1-R0-A'];
    const result = () => pipeStreams(params);
    expect(result).toThrow('input file doesn`t exist');
  });

  test('No output file exists', () => {
    const params = ['-o', './output.txt', '-i', inputFilePath, '-c', 'C1-C1-R0-A'];
    const result = () => pipeStreams(params);
    expect(result).toThrow('output file doesn`t exist');
  });
});
