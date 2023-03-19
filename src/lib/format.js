import { isObject } from './utils.js';

const stylish = (diff) => {
  const output = diff.flatMap((row) => {
    console.log(JSON.stringify(row));
    if (row.unchenged) {
      // console.log(JSON.stringify(row));
      let [firstRow, restRows] = ['', []];

      if (isObject(row.old)) {
        [firstRow, ...restRows] = stylish(row.old);

        console.log(
          'restRows :',
          restRows.at(-1),
          '%%%%%%%%%%%%%%==============================='
        );

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
    console.log(out);
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

const flat = () => {};
export default { stylish, flat };
