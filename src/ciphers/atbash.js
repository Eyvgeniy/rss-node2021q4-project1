import { isAlphabet, getParams } from './utils.js';

const shiftChar = (char) => {
  const charIdx = char.charCodeAt();
  if (!isAlphabet(charIdx)) return char;

  const { middleStart, middleEnd } = getParams(charIdx);

  let shiftCharCode;
  if (charIdx < middleEnd) {
    shiftCharCode = middleStart + (middleEnd - charIdx);
  } else {
    shiftCharCode = middleEnd - (charIdx - middleStart);
  }

  return String.fromCharCode(shiftCharCode);
};

export default (inputText) =>
  inputText
    .split('')
    .map((char) => shiftChar(char))
    .join('');
