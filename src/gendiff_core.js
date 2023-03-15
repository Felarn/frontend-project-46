import textColor from './lib/textColor.js';
import getTextFromFile from './lib/getTextFromFile.js';
import fs from 'fs';

export default function gendiff(path1, path2, options = {}) {
  const obj1 = JSON.parse(getTextFromFile(path1) || '{}');
  const obj2 = JSON.parse(getTextFromFile(path2) || '{}');

  const allEntries = Object.keys({ ...obj1, ...obj2 }).sort();

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
  console.log(diffString);
  return diffString;
}
