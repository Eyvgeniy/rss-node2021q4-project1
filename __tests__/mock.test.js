// eslint-disable-next-line import/no-extraneous-dependencies
import jest from 'jest-mock';
import { resolve } from 'path';
import { Transform } from 'stream';
import TransformStream from '../src/streams/transformStream.js';

describe('test with mocks', () => {
  test('CustomTransformStream typeof TransformStream', () => {
    const CustomTransform = new TransformStream();

    expect(CustomTransform instanceof Transform).toBeTruthy();
  });

  test('Cipher func exects during transform', (done) => {
    const cipherMock = jest.fn((x) => x);

    const CustomTransformStream = new TransformStream({}, cipherMock);
    CustomTransformStream.write('abc');

    expect(
      new Promise((res) => {
        CustomTransformStream.on('data', (chunk) => {
          res(chunk.toString());
          done();
        });
      }),
    ).resolves.toBe('abc');

    expect(cipherMock).toHaveBeenCalledWith('abc');
  });
});
