import path from 'node:path';
import YML from 'js-yaml';
import readFile from './readFile.js';

export default (filePath) => {
  const ext = path.extname(filePath);
  switch (ext) {
    case '.json':
      return JSON.parse(readFile(filePath) || '{}');

    case '.yml':
    case '.yaml':
      return YML.load(readFile(filePath) || '{}');

    default:
      throw new Error(`"${ext}" is unsupported file type`);
  }
};
