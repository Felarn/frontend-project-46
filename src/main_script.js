import textColor from './lib/textColor.js';
import gendiff_core from './gendiff_core.js';
import { program } from 'commander';
import path from 'path';
// import fs from 'fs';
import getTextFromFile from './lib/getTextFromFile.js';

const { version } = JSON.parse(
  getTextFromFile('/home/felarn/frontend-project-46/package.json')
);

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
