import formatter from '../formatter/formatter.js';
import stylishColorScheme from './colorSchemes/scheme_stylish.js';
import plainColorScheme from './colorSchemes/scheme_plain.js';

const colorSchemes = { stylish: stylishColorScheme, plain: plainColorScheme };

export default function makeColorTags(diff, formatStyle) {
  if (!Object.hasOwn(colorSchemes, formatStyle)) return [];
  return formatter(diff, colorSchemes[formatStyle]);
}
