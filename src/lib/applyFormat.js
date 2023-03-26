import json from './formats/format_json.js';
import plain from './formats/format_plain.js';
import stylish from './formats/format_stylish.js';

const applyFormat = (diff, formatStyle) => {
  const formats = { json, plain, stylish };
  return formats[formatStyle](diff);
};

export default applyFormat;
