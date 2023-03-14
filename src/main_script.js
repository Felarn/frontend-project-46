import textColor from './lib/textColor.js';
import { program } from 'commander';
import fs from 'fs';

const { version } = JSON.parse(fs.readFileSync('package.json'));

console.log(textColor.yellow, 'Hello! I`m insdex.js <-----');

program
  .version(version)
  .description('Compares two configuration files and shows a difference.')
  .option('-f --format <type>', 'output format')
  .arguments('<filepath1>, <filepath2>')
  .action();

export default program.parse();
