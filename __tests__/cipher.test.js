import atbash from '../src/ciphers/atbash.js';
import caesar from '../src/ciphers/caesar.js';
import cipher from '../src/ciphers/index.js';

describe('atbash cipher', () => {
  test('atbash', () => {
    const result = atbash('AAZZaazzMMNNmmnn');
    expect(result).toBe('ZZAAzzaaNNMMnnmm');
  });
});

describe('caesar cipher tests', () => {
  test('caesar cipher', () => {
    const result = caesar('aabb');
    expect(result).toBe('bbcc');
  });

  test('caesar cipher do not cipher non-words chars', () => {
    const result = caesar('aabb!@#@');
    expect(result).toBe('bbcc!@#@');
  });

  test('caesar cipher saves chars case', () => {
    const result = caesar('aabbAABB');
    expect(result).toBe('bbccBBCC');
  });

  test('caesar cipher exit alphbet length', () => {
    const result = caesar('ZZZzzz');
    expect(result).toBe('AAAaaa');
  });

  test('caesar cipher custome shift', () => {
    const shift1 = 8;
    const result1 = caesar('AAAbbb_123', shift1);
    expect(result1).toBe('IIIjjj_123');

    const shift2 = 8;
    const result2 = caesar('ZZZzzz_123', shift2);
    expect(result2).toBe('HHHhhh_123');
  });
});

describe('test cipher chain', () => {
  test('cipher - 1', () => {
    const str = 'This is secret. Message about "_" symbol!';
    const args = ['caesarEnc', 'caesarEnc', 'rotDec', 'atbash'];

    const result = cipher(args)(str);
    const expected = 'Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!';
    expect(result).toBe(expected);
  });

  test('cipher - 2', () => {
    const str = 'This is secret. Message about "_" symbol!';
    const args = [
      'caesarEnc',
      'rotEnc',
      'caesarDec',
      'caesarDec',
      'atbash',
      'rotDec',
      'rotEnc',
      'rotEnc',
      'atbash',
      'caesarEnc',
    ];

    const result = cipher(args)(str);
    expect(result).toBe(str);
  });
});
