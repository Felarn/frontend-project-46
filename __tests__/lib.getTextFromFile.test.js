import getTextFromFile from '../src/lib/getTextFromFile.js';
import { fileURLToPath } from 'node:url';

const testFilePathRelative = '__tests__/__fixtures__/read_test';
const testFilePathAbs = fileURLToPath(
  new URL('__fixtures__/read_test', import.meta.url)
);

test('relative path', () => {
  expect(getTextFromFile(testFilePathRelative)).toEqual('sample text');
});

test('absolute path', () => {
  expect(getTextFromFile(testFilePathAbs)).toEqual('sample text');
});
