import { isObject } from './utils.js';

const formatStylish = (diff) => {
  const output = diff.flatMap((row) => {
    if (row.unchenged) {
      let [firstRow, restRows] = ['', []];

      if (isObject(row.old)) {
        [firstRow, ...restRows] = formatStylish(row.old);

        restRows.push('    '.repeat(row.depth + 1) + restRows.pop());
      } else {
        firstRow = row.old;
      }

      return [
        formStringStylish(' ', row.key, firstRow, row.depth),
        ...restRows,
      ];
    }
    const out = [];

    if (Object.hasOwn(row, 'old'))
      out.push(formStringStylish('-', row.key, row.old, row.depth));

    if (Object.hasOwn(row, 'new'))
      out.push(formStringStylish('+', row.key, row.new, row.depth));

    return out;
  });

  return ['{', ...output, '}'];
};

const formStringStylish = (symbol, key, value, depth) =>
  `${'    '.repeat(depth)}  ${symbol} ${key}:${formatValueStylish(
    value,
    depth
  )}`;

const formatValueStylish = (input, depth) => {
  if (input === '') return '';
  if (!isObject(input)) return ' ' + String(input);
  return (
    ' ' +
    JSON.stringify(input, null, 4)
      .replaceAll('"', '')
      .replaceAll(',', '')
      .split('\n')
      .join(`\n${'    '.repeat(depth + 1)}`)
  );
};

const formatValuePlain = (entity) => {
  if (isObject(entity)) return '[complex value]';
  if (typeof entity === 'string') return `'${entity}'`;
  return entity;
};
const wasRemoved = (obj) =>
  Object.hasOwn(obj, 'old') && !Object.hasOwn(obj, 'new');

const wasAdded = (obj) =>
  !Object.hasOwn(obj, 'old') && Object.hasOwn(obj, 'new');

const getAction = (obj) => {
  if (wasRemoved(obj)) return 'removed';
  if (wasAdded(obj)) return `added with value: ${formatValuePlain(obj.new)}`;

  return `updated. From ${formatValuePlain(obj.old)} to ${formatValuePlain(
    obj.new
  )}`;
};

const formatPlain = (diff, path = '') => {
  console.log(diff, 'diff <=============');
  const out = diff.flatMap((row) => {
    if (row.unchenged)
      return isObject(row.old)
        ? formatPlain(row.old, path + row.key + '.')
        : [];
    return `Property '${path + row.key}' was ${getAction(row)}`;
  });
  console.log(out);
  return out;
};

const formatJson = (diff) => JSON.stringify(diff);

export default { stylish: formatStylish, plain: formatPlain, json: formatJson };
