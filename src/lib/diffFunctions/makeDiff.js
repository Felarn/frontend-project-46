import _ from 'lodash';

const determineKeyStatus = (obj1, obj2, key) => {
  if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) return 'added';
  if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) return 'removed';
  if (obj1[key] === obj2[key]) return 'unchanged';
  return 'changed';
};

export const makeTerminal = (obj1, obj2, key) => ({
  key,
  type: 'terminal',
  status: determineKeyStatus(obj1, obj2, key),
  oldValue: obj1[key],
  newValue: obj2[key],
});

const makeDiff = (obj1, obj2) => {
  const allKeys = Object.keys({ ...obj1, ...obj2 });
  return _.sortBy(allKeys)
    .map((key) => {
      if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        return {
          key,
          type: 'node',
          children: makeDiff(obj1[key], obj2[key]),
        };
      }

      return makeTerminal(obj1, obj2, key);
    });
};

export default makeDiff;
