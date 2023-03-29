import textColor from './colorSchemes/textColor.js';

export default function display(formattedDiff, colorTags) {
  const colorize = (diff, tags) => diff.map(
    (row, index) => `${tags[index] ?? textColor.white}${row}${textColor.white}`,
  );

  console.log(colorize(formattedDiff, colorTags).join('\n'));
}
