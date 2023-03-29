import textColor from './textColor.js';
import formatter from '../../formatter/formatter.js';

const stylishColorScheme = {
  node: ({ children }, colorSchemes) => formatter(children, colorSchemes),
  unchanged: () => textColor.white,
  added: () => textColor.green,
  removed: () => textColor.red,
  changed: () => [textColor.yellow, textColor.yellow],
  output: (colorTags) => [textColor.white, ...colorTags, textColor.white],
};

export default stylishColorScheme;
