import readFile from '../src/lib/readFile.js';
import gendiff from '../src/gendiff_core.js';
import getFixturePath from '../__fixtures__/getFixturePath.js';

// ========= части файлов со входными данными ======
const styleDir = 'expect_stylish';
const plainDir = 'expect_plain';
const simpleDir = 'simple';
const nestedDir = 'nested';
const extJSON = '.json';
const extYML = '.yml';
const extYAML = '.yaml';
const file_1 = 'file1';
const file_2 = 'file2';
const fileEmpt = 'empty';
const style = 'stylish';
const plain = 'plain';
const styleJson = 'json';

// ========= файлы с ожидаемымыи результатами =====
const expSimple_1_1 = 'simple_1_1.txt';
const expSimple_1_2 = 'simple_1_2.txt';
const expSimple_2_1 = 'simple_2_1.txt';
const json_1_2 = 'json_1_2.txt';
const expSimple_empty_1 = 'simple_empty_1.txt';
const expSimple_1_empty = 'simple_1_empty.txt';
const exp_empty_empty = 'empty_empty.txt';

const expNested_1_2 = 'nested_1_2.txt';

// =========== таблицы комбинаций для проверки ==========
const cases = [
  [simpleDir, file_1, simpleDir, file_2, styleDir, expSimple_1_2, style],
  [simpleDir, file_2, simpleDir, file_1, styleDir, expSimple_2_1, style],
  [simpleDir, file_1, simpleDir, file_1, styleDir, expSimple_1_1, style],
  [simpleDir, fileEmpt, simpleDir, file_1, styleDir, expSimple_empty_1, style],
  [simpleDir, file_1, simpleDir, fileEmpt, styleDir, expSimple_1_empty, style],
  [simpleDir, fileEmpt, simpleDir, fileEmpt, styleDir, exp_empty_empty, style],
  [nestedDir, file_1, nestedDir, file_2, styleDir, expNested_1_2, style],

  [simpleDir, file_1, simpleDir, file_2, plainDir, expSimple_1_2, plain],
  [nestedDir, file_1, nestedDir, file_2, plainDir, expNested_1_2, plain],

  [nestedDir, file_1, nestedDir, file_2, plainDir, json_1_2, styleJson],
];
const extesions = [extJSON, extYML, extYAML];

// ============ тесты ======================================
describe.each(extesions)('from %s-file', (ext1) => {
  describe.each(extesions)('to %s-file', (ext2) => {
    test.each(cases)(
      'from: %s/%s to --> %s/%s \n\texpected output: %s/%s',
      (dir1, file1, dir2, file2, expDir, expFile, format) => {
        const path1 = getFixturePath(dir1, file1 + ext1);
        const path2 = getFixturePath(dir2, file2 + ext2);
        const expectations = readFile(getFixturePath(expDir, expFile));
        expect(gendiff(path1, path2, format)).toEqual(expectations);
      }
    );
  });
});
