import textColor from './lib/textColor.js';
import getObjFromFile from './lib/getObjFromFile.js';
import getDiff from './lib/getDiff.js';

export default function gendiff(path1, path2, format = 'stylish') {
  const obj1 = getObjFromFile(path1);
  const obj2 = getObjFromFile(path2);

  const diffArr = getDiff(obj1, obj2);
  const diffFormatted = diffArr;

  console.log(diffFormatted);
  return diffFormatted;
}
