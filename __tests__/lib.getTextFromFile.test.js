import { fileURLToPath } from 'node:url';
import path from 'node:path';
import getTextFromFile from '../src/lib/readFile.js';

const relativePath = '__fixtures__/read_test';
const absPath = path.resolve(
  fileURLToPath(import.meta.url),
  '../..',
  relativePath,
);

test('relative path', () => {
  expect(getTextFromFile(relativePath)).toEqual('sample text');
});

test('absolute path', () => {
  expect(getTextFromFile(absPath)).toEqual('sample text');
});
