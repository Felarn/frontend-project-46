import getObjFromFile from './lib/getObjFromFile.js';
import getDiff from './lib/getDiff.js';
import applyFormat from './lib/applyFormat.js';

export default function gendiff(path1, path2, formatStyle = 'stylish') {
  const obj1 = getObjFromFile(path1);
  const obj2 = getObjFromFile(path2);
  const diff = getDiff(obj1, obj2);
  return applyFormat(diff, formatStyle);
}
