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
      throw new Error(`Wrong config params, no method for argument ${param}`);
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
      throw new Error(`Wrong arguments type, no method for argument ${param}`);
  }
};

export const parseConfig = (params) => {
  const paramsArr = params.split('-');
  if (paramsArr.find((item) => item.length > 2)) {
    throw new Error(`Wrong config params`);
  }

  return paramsArr.map((item) => getCipher(item));
};

export const parseArgs = (params) => {
  const parsedParams = params.reduce((acc, item, idx, arr) => {
    if (idx % 2) return acc;

    const param = getParam(item);
    if (acc[param]) {
      throw new Error(`You provided ${param} argument more than once`);
    }

    acc[param] = arr[idx + 1];
    return acc;
  }, {});

  if (parsedParams.config === undefined) {
    throw new Error('Please use config params');
  }

  return parsedParams;
};

export default (args) => {
  const parsedArgments = parseArgs(args);
  parsedArgments.config = parseConfig(parsedArgments.config);
  return parsedArgments;
};
