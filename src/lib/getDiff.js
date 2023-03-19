import { isObject } from './utils.js';

const getDiff = (obj1, obj2, level = 0) => {
  const allEntries = Object.keys({ ...obj1, ...obj2 }).sort();

  const diffArr = allEntries.flatMap((keyName) => {
    if (typeof obj1[keyName] === 'object' && typeof obj2[keyName] === 'object')
      return [
        {
          key: keyName,
          unchenged: true,
          old: getDiff(obj1[keyName], obj2[keyName], level + 1),
          depth: level,
        },
      ];

    const out = {
      key: keyName,
      unchenged: obj1[keyName] === obj2[keyName],
      depth: level,
    };
    if (Object.hasOwn(obj1, keyName)) out.old = obj1[keyName];
    if (Object.hasOwn(obj2, keyName)) out.new = obj2[keyName];
    return out;
  });

  return diffArr;
};

export default getDiff;
