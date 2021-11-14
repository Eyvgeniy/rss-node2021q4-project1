const NUMBER_UPPERCASE_ALPHABET_START = 64;
const NUMBER_UPPERCASE_ALPHABET_END = 90;
const NUMBER_DOWNCASE_ALPHABET_START = 96;
const NUMBER_DOWNCASE_ALPHABET_END = 122;
const MCharCode = 77;
const NCharCode = 78;
const mCharCode = 109;
const nCharCode = 110;
const caseMap = {
  downcase: {
    start: NUMBER_DOWNCASE_ALPHABET_START,
    end: NUMBER_DOWNCASE_ALPHABET_END,
    middleStart: mCharCode,
    middleEnd: nCharCode,
  },
  uppercase: {
    start: NUMBER_UPPERCASE_ALPHABET_START,
    end: NUMBER_UPPERCASE_ALPHABET_END,
    middleStart: MCharCode,
    middleEnd: NCharCode,
  },
};
export const ALPHABET_LENGTH = 26;

const isDowncaseChar = (idx) =>
  idx > NUMBER_DOWNCASE_ALPHABET_START && idx <= NUMBER_DOWNCASE_ALPHABET_END;
const isUppercaseChar = (idx) =>
  idx > NUMBER_UPPERCASE_ALPHABET_START && idx <= NUMBER_UPPERCASE_ALPHABET_END;

export const isAlphabet = (charIdx) => isDowncaseChar(charIdx) || isUppercaseChar(charIdx);

const checkCharCase = (charIdx) => {
  if (isUppercaseChar(charIdx)) {
    return 'uppercase';
  }
  if (isDowncaseChar(charIdx)) {
    return 'downcase';
  }
  return 'error';
};

export const getParams = (charIdx) => {
  const charCase = checkCharCase(charIdx);
  return caseMap[charCase];
};
