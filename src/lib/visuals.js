export const textColor = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[0m',
};

const stylish = (formattedDiff) =>
  formattedDiff.flatMap((row) => {
    if (row.trim()[0] === '-') return 'red';
    if (row.trim()[0] === '+') return 'green';
    return 'white';
  });

const flat = (diff) => {};

const colorize = (formattedDiff, colorTable) =>
  formattedDiff.map(
    (row, index) => textColor[colorTable[index]] + row + textColor.white
  );

export const display = (formattedDiff, colorTags) => {
  console.log(colorize(formattedDiff, colorTags).join('\n'));
};

export const getColorTags = { stylish, flat };
