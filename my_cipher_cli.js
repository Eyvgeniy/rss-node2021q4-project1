import cipher_cli from './src/pipeStreams.js';
try {
  cipher_cli();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
