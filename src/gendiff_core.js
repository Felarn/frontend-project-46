import getObjFromFile from './lib/getObjFromFile.js';
import makeDiff from './lib/makeDiff.js';
import applyFormat from './lib/formatter/applyFormat.js';
import makeColorTags from './lib/visuals/makeColorTags.js';
import display from './lib/visuals/display.js';

export default function gendiff(path1, path2, formatStyle = 'stylish', colorize = false) {
  const obj1 = getObjFromFile(path1);
  const obj2 = getObjFromFile(path2);
  const diff = makeDiff(obj1, obj2);
  const formattedDiff = applyFormat(diff, formatStyle);
  const diffString = formattedDiff.join('\n');

  if (colorize) {
    const colorTags = makeColorTags(diff, formatStyle);
    display(formattedDiff, colorTags);
  } else {
    console.log(diffString);
  }

  return diffString;
}
