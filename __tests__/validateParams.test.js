import { parseArgs } from '../src/parseParams';

describe('test cli parsing arguments', () => {
  test('parse full params', () => {
    const result = parseArgs([
      '--output',
      './output.txt',
      '--input',
      './input.txt',
      '--config',
      'C1-C1-R0-A',
    ]);

    expect(result.output).toBe('./output.txt');
    expect(result.input).toBe('./input.txt');
    expect(result.config).toBe('C1-C1-R0-A');
  });

  test('parse сut params', () => {
    const result = parseArgs(['-o', './output.txt', '-i', './input.txt', '-c', 'C1-C1-R0-A']);

    expect(result.output).toBe('./output.txt');
    expect(result.input).toBe('./input.txt');
    expect(result.config).toBe('C1-C1-R0-A');
  });

  test('double param error', () => {
    const result1 = () =>
      parseArgs(['-o', './output.txt', '--input', './input.txt', '--output', './config']);

    expect(() => result1()).toThrow('You provided output argument more than once');
  });
});
