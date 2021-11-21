import fs from 'fs';

const checkFileAccess = (path, param) => {
  if (path !== undefined) {
    try {
      fs.accessSync(path);
    } catch (e) {
      throw new Error(`${param} file doesn\`t exist`);
    }
  }
};

export default checkFileAccess;
