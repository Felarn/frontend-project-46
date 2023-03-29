import _ from 'lodash';
import formatter from '../formatter.js';

const formatValuePlain = (entity) => {
  if (_.isObject(entity)) return '[complex value]';
  if (typeof entity === 'string') return `'${entity}'`;
  return entity;
};

const formatPlain = {
  initAccumulator: '',
  node: ({ key }, path) => `${path}${key}.`,
  unchanged: () => [],
  removed: ({ key }, path) => `Property '${path}${key}' was removed`,
  added: ({ key, newValue }, path) => `Property '${path}${key}' was `
    + `added with value: ${formatValuePlain(newValue)}`,

  changed: ({ key, oldValue, newValue }, path) => `Property '${path}${key}' was `
    + `updated. From ${formatValuePlain(oldValue)} to ${formatValuePlain(newValue)}`,

  output: (data) => data,
};

const plain = (diff) => formatter(diff, formatPlain, formatPlain.initAccumulator);
export default plain;
