import { program } from 'commander';
import gendiff from './gendiff_core.js';
import getTextFromFile from './lib/readFile.js';
import makeColorTags from './lib/visuals/makeColorTags.js';
import display from './lib/visuals/display.js';

const { version } = JSON.parse(getTextFromFile('package.json'));

program
  .version(version)
  .description('Compares two configuration files and shows a difference.')
  .option('-c --colorize', 'colorize terminal output')
  .option('-f --format <type>', 'output format')
  .arguments('filepath1 filepath2')
  .action((filepath1, filepath2, options) => {
    const colorize = options.colorize ?? false;
    const format = options.format ?? 'stylish';

    if (!['stylish', 'plain', 'json'].includes(format)) {
      throw new Error('Incorrect format option');
    }

    const result = gendiff(filepath1, filepath2, format, colorize);

    if (colorize) {
      const [diff, diffFormatted] = result;
      const colorTags = makeColorTags(diff, format);
      display(diffFormatted, colorTags);
    } else {
      console.log(result);
    }
  });

export default () => program.parse();
