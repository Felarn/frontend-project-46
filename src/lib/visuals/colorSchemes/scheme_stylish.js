import textColor from './textColor.js';

const stylishColorScheme = {
  node: () => {},
  unchanged: () => textColor.white,
  added: () => textColor.green,
  removed: () => textColor.red,
  changed: () => [textColor.yellow, textColor.yellow],
  output: (colorTags) => [textColor.white, ...colorTags, textColor.white],
};

export default stylishColorScheme;
