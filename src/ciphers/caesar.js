import { isAlphabet, getParams, ALPHABET_LENGTH } from './utils.js';

export const shiftChar = (char, shift) => {
  const charIdx = char.charCodeAt();
  if (!isAlphabet(charIdx)) return char;

  const { start, end } = getParams(charIdx);
  const shiftRemainder = shift % ALPHABET_LENGTH;

  if (charIdx + shiftRemainder > end) {
    const currentShift = charIdx + shiftRemainder - end;
    return String.fromCharCode(start + currentShift);
  }
  if (charIdx + shiftRemainder <= start) {
    const currentShift = charIdx - start + shiftRemainder;
    return String.fromCharCode(end + currentShift);
  }
  return String.fromCharCode(charIdx + shiftRemainder);
};

export default (inputText, shift = 1) =>
  inputText
    .split('')
    .map((char) => shiftChar(char, shift))
    .join('');
