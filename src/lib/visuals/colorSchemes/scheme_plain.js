import textColor from './textColor.js';

const plainColorScheme = {
  accumulator: () => {},
  unchanged: () => {},
  added: () => textColor.green,
  removed: () => textColor.red,
  changed: () => textColor.white,
  output: (colorTags) => colorTags,
};

export default plainColorScheme;
