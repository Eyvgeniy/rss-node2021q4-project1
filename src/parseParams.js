import { cipherMap } from './ciphers/index.js';

const getCipher = (param) => {
  switch (param) {
    case 'C1':
      return 'caesarEnc';
    case 'C0':
      return 'caesarDec';
    case 'R1':
      return 'rotEnc';
    case 'R0':
      return 'rotDec';
    case 'A':
      return 'atbash';
    default:
      throw new Error('Wrong arguments type');
  }
};

const getParam = (param) => {
  switch (param) {
    case '-c':
      return 'config';
    case '--config':
      return 'config';
    case '-i':
      return 'input';
    case '--input':
      return 'input';
    case '-o':
      return 'output';
    case '--output':
      return 'output';
    default:
      throw new Error('Wrong arguments type');
  }
};

export const parseConfig = (params) => {
  const paramsArr = params.split('-');
  if (paramsArr.find((item) => item.length > 2)) {
    throw new Error('Wrong arguments types');
  }

  return paramsArr.map((item) => getCipher(item));
};

export const parseArgs = (params) => {
  return params.reduce((acc, item, idx, arr) => {
    if (idx % 2) return acc;

    const param = getParam(item);
    if (acc[param]) {
      throw new Error('Wrong arguments types');
    }

    acc[param] = arr[idx + 1];
    return acc;
  }, {});
};

export const cipherStr = (str, args) => {
  const argumentsObj = parseArgs(args);
  argumentsObj.config = parseConfig(argumentsObj.config);

  return argumentsObj.config.reduce((acc, item) => {
    const cipherFunc = cipherMap[item];

    return cipherFunc(acc);
  }, str);
};

export default (args) => {
  const parsedArgments = parseArgs(args);
  parsedArgments.config = parseConfig(parsedArgments.config);
  return parsedArgments;
};
