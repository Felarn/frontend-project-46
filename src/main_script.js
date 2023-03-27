import { program } from 'commander';
import gendiff from './gendiff_core.js';
import getTextFromFile from './lib/readFile.js';

const { version } = JSON.parse(getTextFromFile('package.json'));

program
  .version(version)
  .description('Compares two configuration files and shows a difference.')
  .option('-f --format <type>', 'output format')
  .option('-c --colorize <type>', 'colorize output')
  .arguments('<filepath1>, <filepath2>')
  .action((filepath1, filepath2, options) => {
    const format = options.format ?? 'stylish';
    if (!['stylish', 'plain', 'json'].includes(format)) {
      throw new Error('Incorrect format option');
    }
    const colorization = options.colorize ?? false;
    gendiff(filepath1, filepath2, format, colorization);
  });

export default () => program.parse();
