import textColor from './lib/textColor.js';
import gendiff_core from './gendiff_core.js';
import { program } from 'commander';
import path from 'path';
import fs from 'fs';

// const { version } = JSON.parse(fs.readFileSync('./package.json'));
const version = '0.2.0';

console.log(textColor.yellow, 'Hello! I`m main_script.js <-----');

program
  .version(version)
  .description('Compares two configuration files and shows a difference.')
  .option('-f --format <type>', 'output format')
  .arguments('<filepath1>, <filepath2>')
  .action(function (filepath1, filepath2, options) {
    gendiff_core(filepath1, filepath2, options);
  });

export default program.parse();
