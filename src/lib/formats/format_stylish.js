import _ from 'lodash';
import formatter from '../formatter.js';

const formatValueStylish = (input, depth) => {
  if (!_.isObject(input)) return String(input);
  return JSON.stringify(input, null, 4)
    .replaceAll('"', '')
    .replaceAll(',', '')
    .split('\n')
    .join(`\n${'    '.repeat(depth + 1)}`);
};

const makeStringStylish = (symbol, key, Value, depth) => `${
  '    '.repeat(depth)}  ${symbol} ${key}: ${formatValueStylish(
  Value,
  depth,
)}`;

const formatStylish = {
  initAccumulator: { depth: 0, ancesterKey: '' },
  node: ({ children, key }, format, { depth }) => formatter(
    children,
    format,
    { depth: depth + 1, ancesterKey: `${key}: ` },
  ),
  unchanged: ({ key, oldValue }, { depth }) => makeStringStylish(' ', key, oldValue, depth),
  removed: ({ key, oldValue }, { depth }) => makeStringStylish('-', key, oldValue, depth),
  added: ({ key, newValue }, { depth }) => makeStringStylish('+', key, newValue, depth),
  changed: ({ key, oldValue, newValue }, { depth }) => [
    makeStringStylish('-', key, oldValue, depth),
    makeStringStylish('+', key, newValue, depth),
  ],

  output: (data, { depth, ancesterKey }) => {
    const prefix = `${'    '.repeat(depth) + ancesterKey}{`;
    const postfix = `${'    '.repeat(depth)}}`;
    return [prefix, ...data, postfix];
  },
};

const stylish = (diff) => formatter(diff, formatStylish, formatStylish.initAccumulator).join('\n');

export default stylish;
