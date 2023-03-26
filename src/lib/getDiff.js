import _ from 'lodash';

const getStatus = (obj1, obj2, key) => {
  if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) return 'added';
  if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) return 'removed';
  if (obj1[key] === obj2[key]) return 'unchanged';
  return 'changed';
};

const getDiff = (obj1, obj2) => _.sortBy(Object.keys({ ...obj1, ...obj2 }))
  .map((key) => {
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return {
        key,
        type: 'node',
        children: getDiff(obj1[key], obj2[key]),
      };
    }

    return {
      key,
      type: 'terminal',
      status: getStatus(obj1, obj2, key),
      oldValue: obj1[key],
      newValue: obj2[key],
    };
  });

export default getDiff;
