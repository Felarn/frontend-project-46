import getTextFromFile from '../src/lib/getTextFromFile.js';
import gendiff from '../src/gendiff_core.js';

const testFile1Path = '__tests__/__fixtures__/flat_test/file1.json';
const testFile2Path = '__tests__/__fixtures__/flat_test/file2.json';
const expected1 = getTextFromFile(
  '__tests__/__fixtures__/flat_test/result1.txt'
);
const expected2 = getTextFromFile(
  '__tests__/__fixtures__/flat_test/result2.txt'
);

test('test file1 > file2', () => {
  expect(gendiff(testFile1Path, testFile2Path)).toEqual(expected1);
});

test('test file2 > file1', () => {
  expect(gendiff(testFile2Path, testFile1Path)).toEqual(expected2);
});
