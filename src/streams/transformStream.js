import { Transform } from 'stream';

class TransformCipher extends Transform {
  constructor(options, cipher) {
    super(options);
    this.cipher = cipher;
  }

  _transform(chunk, _encoding, callback) {
    try {
      const string = chunk.toString('utf-8');
      const encodedString = this.cipher(string);
      this.push(encodedString);
      callback();
    } catch (err) {
      callback(err);
    }
  }
}

export default TransformCipher;
