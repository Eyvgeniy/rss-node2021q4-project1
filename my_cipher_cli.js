import { argv } from 'process';
import cipherCli from './src/pipeStreams.js';

try {
  const cliArgs = argv.slice(2);
  cipherCli(cliArgs);
} catch (error) {
  process.stderr.write(error.message);
  process.exit(1);
}
