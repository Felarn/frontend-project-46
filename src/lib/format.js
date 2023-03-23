import { isObject } from './utils.js';

const formatStylish = (diff) => {
  const output = diff.flatMap((row) => {
    if (isNode(row)) {
      const [firstRow, ...restRows] = formatStylish(row.children);

      restRows.push('    '.repeat(row.depth + 1) + restRows.pop());

      return [
        formStringStylish(' ', row.key, firstRow, row.depth),
        ...restRows,
      ];
    }

    const out = [];
    if (isStatus(row, 'unchanged'))
      out.push(formStringStylish(' ', row.key, row.oldValue, row.depth));

    if (isStatus(row, 'removed', 'changed'))
      out.push(formStringStylish('-', row.key, row.oldValue, row.depth));

    if (isStatus(row, 'added', 'changed'))
      out.push(formStringStylish('+', row.key, row.newValue, row.depth));

    return out;
  });

  return ['{', ...output, '}'];
};

const isNode = (obj) => obj.type === 'node';
const isStatus = (obj, ...states) => states.includes(obj.status);

const formStringStylish = (symbol, key, Value, depth) =>
  `${'    '.repeat(depth)}  ${symbol} ${key}:${formatValueStylish(
    Value,
    depth
  )}`;

const formatValueStylish = (input, depth) => {
  if (!isObject(input)) return ' ' + String(input);

  const objAsText =
    ' ' +
    JSON.stringify(input, null, 4)
      .replaceAll('"', '')
      .replaceAll(',', '')
      .split('\n')
      .join(`\n${'    '.repeat(depth + 1)}`);

  return objAsText;
};

const formatValuePlain = (entity) => {
  if (isObject(entity)) return '[complex value]';
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
    if (isNode(row)) return formatPlain(row.children, path + row.key + '.');
    if (row.status !== 'unchanged')
      return `Property '${path + row.key}' was ${getAction(row)}`;
    return [];
  });
  return out;
};

const formatJson = (diff) => JSON.stringify(diff);

export default { stylish: formatStylish, plain: formatPlain, json: formatJson };
