import { parseArgs, parseConfig, cipherStr } from '../src/validateParams';
import atbash from '../src/ciphers/atbash';

test('validate caesar cipher params', () => {
  const result = parseArgs(['-o', './output.txt', '--input', './input.txt', '-c', 'C1-C1-R0-A']);
  expect(result.output).toBe('./output.txt');
  expect(result.input).toBe('./input.txt');
  console.log(parseConfig(result.config));

  const result1 = () =>
    parseArgs(['-o', './output.txt', '--input', './input.txt', '--output', './config']);
  expect(() => result1()).toThrow();
});

test('atbash', () => {
  const result = atbash('AAZZaazzMMNNmmnn');
  expect(result).toBe('ZZAAzzaaNNMMnnmm');
});

test('cipher - 1', () => {
  const str = 'This is secret. Message about "_" symbol!';
  const args = ['-c', 'C1-C1-R0-A'];
  const result = cipherStr(str, args);
  const expected = 'Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!';
  expect(result).toBe(expected);
});

test('cipher - 2', () => {
  const str = 'This is secret. Message about "_" symbol!';
  const args = ['-c', 'C1-R1-C0-C0-A-R0-R1-R1-A-C1'];
  const result = cipherStr(str, args);
  const expected = 'Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!';
  expect(result).toBe(str);
});
