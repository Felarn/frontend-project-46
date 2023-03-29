import isNode from '../diffFunctions/isNode.js';
import { getChildren, getStatus } from '../diffFunctions/selectors.js';

const formatter = (diff, format, accumulator = null) => {
  const output = diff.flatMap((line) => {
    if (isNode(line)) {
      return formatter(getChildren(line), format, format.accumulator(line, accumulator));
    }
    return format[getStatus(line)](line, accumulator) ?? [];
  });
  return format.output(output, accumulator);
};

export default formatter;
