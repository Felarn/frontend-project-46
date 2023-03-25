import getObjFromFile from './lib/getObjFromFile.js';
import getDiff from './lib/getDiff.js';
import doFormatting from './lib/doFormatting.js';
import { display, getColorTags } from './lib/visuals.js';

export default function gendiff(path1, path2, formatStyle = 'stylish') {
  const obj1 = getObjFromFile(path1);
  const obj2 = getObjFromFile(path2);
  const diff = getDiff(obj1, obj2);
  const formattedDiff = doFormatting(diff, formatStyle);

  const colorTags = getColorTags(diff, formatStyle);
  display(formattedDiff, colorTags);

  const diffText =
    formatStyle !== 'json' ? formattedDiff.join('\n') : formattedDiff;
  return diffText;
}
