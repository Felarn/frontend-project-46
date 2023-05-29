import makeFormattedDiff2String from './lib/diffFunctions/makeFormattedDiff2String.js';
import getObjFromFile from './lib/getObjFromFile.js';
import applyFormat from './lib/formatter/applyFormat.js';
import makeDiff from './lib/diffFunctions/makeDiff.js';

export default function gendiff(path1, path2, formatStyle = 'stylish', raw = false) {
  const obj1 = getObjFromFile(path1);
  const obj2 = getObjFromFile(path2);
  const diff = makeDiff(obj1, obj2);
  const diffFormatted = applyFormat(diff, formatStyle);
  const diffString = makeFormattedDiff2String(diffFormatted);

  if (raw) return [diff, diffFormatted];

  return diffString;
}
