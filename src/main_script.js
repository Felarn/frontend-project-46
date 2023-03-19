import gendiff_core from './gendiff_core.js';
import { program } from 'commander';
import getTextFromFile from './lib/readFile.js';

const { version } = JSON.parse(
  getTextFromFile('/home/felarn/frontend-project-46/package.json')
);

program
  .version(version)
  .description('Compares two configuration files and shows a difference.')
  .option('-f --format <type>', 'output format')
  .arguments('<filepath1>, <filepath2>')
  .action(function (filepath1, filepath2, options) {
    const format = options.format ?? 'stylish';
    if (!['stylish', 'flat'].includes(format))
      throw new Error('Incorrect format option');

    gendiff_core(filepath1, filepath2, format);
  });

export default program.parse();
