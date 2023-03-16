import getTextFromFile from '../src/lib/readFile.js';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const relativePath = '__fixtures__/read_test';
const absPath = path.resolve(
  fileURLToPath(import.meta.url),
  '../..',
  relativePath
);

test('relative path', () => {
  expect(getTextFromFile(relativePath)).toEqual('sample text');
});

test('absolute path', () => {
  expect(getTextFromFile(absPath)).toEqual('sample text');
});
