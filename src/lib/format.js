import is from './utils.js';

const doFormatting = (diff, formatStyle) => {
  const format = formats[formatStyle];
  return fromatter(diff, format, format.initAccumulator);
};

const fromatter = (diff, format, accumulator = null) => {
  const output = diff.flatMap((line) => {
    if (is.node(line)) return format.node(line, format, accumulator);
    return format[line.status](line, accumulator);
  });
  return format.output(output, accumulator);
};

const stylish = {
  initAccumulator: { depth: 0, ancesterKey: '' },
  node: ({ children, key }, format, { depth }) =>
    fromatter(children, format, { depth: depth + 1, ancesterKey: `${key}: ` }),

  unchanged: ({ key, oldValue }, { depth }) =>
    makeStrStylish(' ', key, oldValue, depth),

  removed: ({ key, oldValue }, { depth }) =>
    makeStrStylish('-', key, oldValue, depth),

  added: ({ key, newValue }, { depth }) =>
    makeStrStylish('+', key, newValue, depth),

  changed: ({ key, oldValue, newValue }, { depth }) => [
    makeStrStylish('-', key, oldValue, depth),
    makeStrStylish('+', key, newValue, depth),
  ],

  output: (data, { depth, ancesterKey }) => {
    const prefix = '    '.repeat(depth) + ancesterKey + '{';
    const postfix = '    '.repeat(depth) + '}';
    return [prefix, ...data, postfix];
  },
};

const plain = {
  initAccumulator: '',
  node: ({ children, key }, format, path) =>
    fromatter(children, format, `${path}${key}.`),
  unchanged: () => [],
  removed: ({ key }, path) => `Property '${path}${key}' was removed`,
  added: ({ key, newValue }, path) =>
    `Property '${path}${key}' was added with value: ${formatValuePlain(
      newValue
    )}`,
  changed: ({ key, oldValue, newValue }, path) =>
    `Property '${path}${key}' was updated. From ${formatValuePlain(
      oldValue
    )} to ${formatValuePlain(newValue)}`,
  output: (data) => data,
};

const formats = { stylish, plain };

const makeStrStylish = (symbol, key, Value, depth) =>
  `${'    '.repeat(depth)}  ${symbol} ${key}: ${formatValueStylish(
    Value,
    depth
  )}`;

const formatValueStylish = (input, depth) => {
  if (!is.object(input)) return String(input);
  return JSON.stringify(input, null, 4)
    .replaceAll('"', '')
    .replaceAll(',', '')
    .split('\n')
    .join(`\n${'    '.repeat(depth + 1)}`);
};

const formatValuePlain = (entity) => {
  if (is.object(entity)) return '[complex value]';
  if (typeof entity === 'string') return `'${entity}'`;
  return entity;
};

const formatJson = (diff) => JSON.stringify(diff);

// export default { stylish: formatStylish, plain: formatPlain, json: formatJson };
export default doFormatting;
