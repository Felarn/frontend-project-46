import textColor from './textColor.js';
import formatter from '../../formatter/formatter.js';

const plainColorScheme = {
  node: ({ children }, colorSchemes) => formatter(children, colorSchemes),
  unchanged: () => [],
  added: () => textColor.green,
  removed: () => textColor.red,
  changed: () => textColor.white,
  output: (colorTags) => colorTags,
};

export default plainColorScheme;
