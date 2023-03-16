import path from 'node:path';
import readFile from './readFile.js';
import YML from 'js-yaml';

export default (filePath) => {
  const ext = path.extname(filePath);
  switch (ext) {
    case '.json':
      return JSON.parse(readFile(filePath) || '{}');

    case '.yml':
    case '.yaml':
      return YML.load(readFile(filePath) || '{}');

    default:
      throw new Error('unsupported file type');
  }
};
