const getDiff = (obj1, obj2, level = 0) => {
  const allEntries = Object.keys({ ...obj1, ...obj2 }).sort();

  const diffArr = allEntries.flatMap((keyName) => {
    if (typeof obj1[keyName] === 'object' && typeof obj2[keyName] === 'object')
      return getDiff(obj1[keyName], obj2[keyName], level + 1);

    return {
      key: keyName,
      old: Object.hasOwn(obj1, keyName) && stringify(obj1[keyName], obj1),
      new: Object.hasOwn(obj2, keyName) && stringify(obj2[keyName], obj2),
      unchenged: obj1[keyName] === obj2[keyName],
      depth: level,
    };
  });

  return diffArr;
};

const stringify = (input, obj) => {
  if (typeof input !== 'object' || input === null) return String(input);
  return JSON.stringify(input, null, 4).replaceAll('"', '').replaceAll(',', '');
};

export default getDiff;
