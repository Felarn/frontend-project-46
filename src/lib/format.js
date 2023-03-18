const stylish = (diff) => {
  const output = diff.flatMap((row) => {
    if (row.unchenged)
      return `${'    '.repeat(row.depth + 1)}${row.key}: ${row.old}`;
    const out = [];

    if (row.old)
      out.push(`${'    '.repeat(row.depth)}  - ${row.key}: ${row.old}`);

    if (row.new)
      out.push(`${'    '.repeat(row.depth)}  + ${row.key}: ${row.new}`);

    return out;
  });

  return ['{', ...output, '}'];
};

const flat = () => {};
export default { stylish, flat };
