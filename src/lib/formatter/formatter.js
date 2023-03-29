const formatter = (diff, format, accumulator = null) => {
  const output = diff.flatMap((line) => {
    if (line.type === 'node') {
      return formatter(line.children, format, format.accumulator(line, accumulator));
    }
    return format[line.status](line, accumulator) ?? [];
  });
  return format.output(output, accumulator);
};

export default formatter;
