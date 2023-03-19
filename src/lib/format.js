import { isObject } from './utils.js';

const stylish = (diff) => {
  const output = diff.flatMap((row) => {
    if (row.unchenged) {
      let [firstRow, restRows] = ['', []];

      if (isObject(row.old)) {
        [firstRow, ...restRows] = stylish(row.old);

        restRows.push('    '.repeat(row.depth + 1) + restRows.pop());
      } else {
        firstRow = row.old;
      }

      return [
        `${'    '.repeat(row.depth + 1)}${row.key}: ${firstRow}`,
        ...restRows,
      ];
    }
    const out = [];

    if (Object.hasOwn(row, 'old'))
      out.push(
        `${'    '.repeat(row.depth)}  - ${row.key}:${toString(
          row.old,
          row.depth
        )}`
      );

    if (Object.hasOwn(row, 'new'))
      out.push(
        `${'    '.repeat(row.depth)}  + ${row.key}:${toString(
          row.new,
          row.depth
        )}`
      );
    return out;
  });

  return ['{', ...output, '}'];
};

const toString = (input, depth) => {
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

const formatValue = (entity) => {
  if (isObject(entity)) return '[complex value]';
  if (typeof entity === 'string') return `'${entity}'`;
  return entity;
};
const wasRemoved = (obj) =>
  Object.hasOwn(obj, 'old') && !Object.hasOwn(obj, 'new');

const wasAdded = (obj) =>
  !Object.hasOwn(obj, 'old') && Object.hasOwn(obj, 'new');

const getAction = (obj) => {
  'not changed'; // временно, не должно выдаваться ничего
  if (wasRemoved(obj)) return 'removed';
  if (wasAdded(obj)) return `added with value: ${formatValue(obj.new)}`;

  return `updated. From ${formatValue(obj.old)} to ${formatValue(obj.new)}`;
};

const plain = (diff, path = '') => {
  console.log(diff, 'diff <=============');
  const out = diff.flatMap((row) => {
    if (row.unchenged)
      return isObject(row.old) ? plain(row.old, path + row.key + '.') : [];
    return `Property '${path + row.key}' was ${getAction(row)}`;
  });
  console.log(out);
  return out;
};
export default { stylish, plain };
