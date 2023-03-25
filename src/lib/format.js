import is from './utils.js';

const formatStylish = (diff, depth = 0, ancesterKey = '') => {
  const output = diff.flatMap((row) => {
    if (is.node(row))
      return formatStylish(row.children, depth + 1, `${row.key}: `);

    if (is.unchanged(row))
      return formStringStylish(' ', row.key, row.oldValue, depth);

    if (is.removed(row))
      return formStringStylish('-', row.key, row.oldValue, depth);

    if (is.added(row))
      return formStringStylish('+', row.key, row.newValue, depth);

    if (is.changed(row))
      return [
        formStringStylish('-', row.key, row.oldValue, depth),
        formStringStylish('+', row.key, row.newValue, depth),
      ];
  });
  const prefix = '    '.repeat(depth) + ancesterKey + '{';
  const postfix = '    '.repeat(depth) + '}';
  return [prefix, ...output, postfix];
};

const formStringStylish = (symbol, key, Value, depth) =>
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

const getAction = (obj) => {
  switch (obj.status) {
    case 'removed':
      return 'removed';
    case 'added':
      return `added with value: ${formatValuePlain(obj.newValue)}`;
    case 'changed':
      return `updated. From ${formatValuePlain(
        obj.oldValue
      )} to ${formatValuePlain(obj.newValue)}`;
    default:
      return [];
  }
};

const formatPlain = (diff, path = '') => {
  const out = diff.flatMap((row) => {
    if (is.node(row)) return formatPlain(row.children, path + row.key + '.');
    if (!is.unchanged(row))
      return `Property '${path + row.key}' was ${getAction(row)}`;
    return [];
  });
  return out;
};

const formatJson = (diff) => JSON.stringify(diff);

export default { stylish: formatStylish, plain: formatPlain, json: formatJson };
