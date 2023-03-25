import is from './utils.js';

const formatter = (diff, format, accumulator = null) => {
  const output = diff.flatMap((line) => {
    if (is.node(line)) return format.node(line, format, accumulator);
    return format[line.status](line, accumulator);
  });
  return format.output(output, accumulator);
};

export default formatter;
