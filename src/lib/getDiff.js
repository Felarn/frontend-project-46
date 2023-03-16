export default (obj1, obj2) => {
  const allEntries = Object.keys({ ...obj1, ...obj2 }).sort();

  // allEntries.flatMap((keyName) => {
  //   ({
  //     key: keyName,
  //     old: Object.hasOwn(obj1, key) && obj1[key],
  //     new: Object.hasOwn(obj2, key) && obj2[key],
  //   });
  // });

  let diffString = allEntries.reduce((outStr, key) => {
    if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
      outStr += `  - ${key}: ${obj1[key]}\n`;
    } else if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      outStr += `  + ${key}: ${obj2[key]}\n`;
    } else if (obj1[key] !== obj2[key]) {
      outStr += `  - ${key}: ${obj1[key]}\n`;
      outStr += `  + ${key}: ${obj2[key]}\n`;
    } else {
      outStr += `    ${key}: ${obj1[key]}\n`;
    }
    return outStr;
  }, '');

  diffString = `{\n${diffString}}`;

  return diffString;
};
