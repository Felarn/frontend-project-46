import makeFormattedDiff2String from './lib/diffFunctions/makeFormattedDiff2String.js';
import getObjFromFile from './lib/getObjFromFile.js';
import makeColorTags from './lib/visuals/makeColorTags.js';
import display from './lib/visuals/display.js';
import applyFormat from './lib/formatter/applyFormat.js';
import makeDiff from './lib/diffFunctions/makeDiff.js';

export default function gendiff(path1, path2, formatStyle = 'stylish', colorize = false) {
  const obj1 = getObjFromFile(path1);
  const obj2 = getObjFromFile(path2);
  const diff = makeDiff(obj1, obj2);
  const diffFormatted = applyFormat(diff, formatStyle);
  const diffString = makeFormattedDiff2String(diffFormatted);

  if (colorize) {
    const colorTags = makeColorTags(diff, formatStyle);
    display(diffFormatted, colorTags);
  } else {
    console.log(diffString);
  }

  return diffString;
}
