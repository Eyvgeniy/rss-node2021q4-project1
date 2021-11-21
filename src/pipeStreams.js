import pipeline from './streams/pipeline.js';
import createStreams from './createStreams.js';
import parseArguments from './parseParams.js';

export default (params) => {
  const { input, output, config } = parseArguments(params);
  const { inputStream, outputStream } = createStreams(input, output);

  pipeline(inputStream, outputStream, config).catch(process.stderr.write);
};
