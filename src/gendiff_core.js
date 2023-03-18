import getObjFromFile from './lib/getObjFromFile.js';
import getDiff from './lib/getDiff.js';
import format from './lib/format.js';
import { display, getColorTags } from './lib/visuals.js';

export default function gendiff(path1, path2, formatStyle = 'stylish') {
  const obj1 = getObjFromFile(path1);
  const obj2 = getObjFromFile(path2);

  const diff = getDiff(obj1, obj2);
  const formattedDiff = format[formatStyle](diff);

  const colorTags = getColorTags[formatStyle](formattedDiff);
  display(formattedDiff, colorTags);

  const diffText = formattedDiff.join('\n');
  return diffText;
}
