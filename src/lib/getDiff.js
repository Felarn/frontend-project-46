import { isObject } from './utils.js';

const getDiff = (obj1, obj2, depth = 0) =>
  Object.keys({ ...obj1, ...obj2 })
    .sort()
    .map((key) => {
      if (isObject(obj1[key]) && isObject(obj2[key]))
        return {
          key,
          depth,
          type: 'node',
          children: getDiff(obj1[key], obj2[key], depth + 1),
        };

      return {
        key,
        depth,
        type: 'terminal',
        status: getStatus(obj1, obj2, key),
        oldValue: obj1[key],
        newValue: obj2[key],
      };
    });

const getStatus = (obj1, obj2, key) => {
  if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) return 'added';
  if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) return 'removed';
  if (obj1[key] === obj2[key]) return 'unchanged';
  return 'changed';
};

export default getDiff;
