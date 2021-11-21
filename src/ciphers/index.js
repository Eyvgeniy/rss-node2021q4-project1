import atbash from './atbash.js';
import caesar from './caesar.js';

export const cipherMap = {
  atbash: (str) => atbash(str),
  caesarEnc: (str) => caesar(str, 1),
  caesarDec: (str) => caesar(str, -1),
  rotEnc: (str) => caesar(str, 8),
  rotDec: (str) => caesar(str, -8),
};

export default (config) => (str) => {
  return config.reduce((acc, item) => {
    const cipher = cipherMap[item];
    return cipher(acc);
  }, str);
};
