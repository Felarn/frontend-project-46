import formatter from './formatter.js';

export const textColor = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[0m',
};

const stylishColorScheme = {
  node: ({ children }, colorSchemes) => formatter(children, colorSchemes),
  unchanged: () => textColor.white,
  added: () => textColor.green,
  removed: () => textColor.red,
  changed: () => [textColor.yellow, textColor.yellow],
  output: (data) => [textColor.white, ...data, textColor.white],
};

const plainColorScheme = {
  node: ({ children }, colorSchemes) => formatter(children, colorSchemes),
  unchanged: () => [],
  added: () => textColor.green,
  removed: () => textColor.red,
  changed: () => textColor.white,
  output: (data) => data,
};

const colorSchemes = { stylish: stylishColorScheme, plain: plainColorScheme };

export const getColorTags = (diff, formatStyle) => {
  if (!Object.hasOwn(colorSchemes, formatStyle)) return [];
  return formatter(diff, colorSchemes[formatStyle]);
};

export const display = (formattedDiff, colorTags) => {
  const colorize = (formattedDiff, colorTable) =>
    formattedDiff.map(
      (row, index) =>
        `${colorTable[index] ?? textColor.white}${row}${textColor.white}`
    );

  console.log(colorize(formattedDiff, colorTags).join('\n'));
};

// export default getColorTags;
