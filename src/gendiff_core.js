import getObjFromFile from './lib/getObjFromFile.js';
import getDiff from './lib/getDiff.js';
import applyFormat from './lib/applyFormat.js';

import { display, getColorTags } from './lib/visuals.js';

export default function gendiff(path1, path2, formatStyle = 'stylish', colorization = false) {
  const obj1 = getObjFromFile(path1);
  const obj2 = getObjFromFile(path2);
  const diff = getDiff(obj1, obj2);
  const formattedDiff = applyFormat(diff, formatStyle);
  const diffString = formattedDiff.join('\n');
  if (colorization) {
    const colorTags = getColorTags(diff, formatStyle);
    display(formattedDiff, colorTags);
  } else {
    console.log(diffString);
  }
  return diffString;
}
