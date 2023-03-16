import readFile from '../src/lib/getTextFromFile.js';
import gendiff from '../src/gendiff_core.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const fixturesPath = path.resolve(
  fileURLToPath(import.meta.url),
  '../../__fixtures__'
);

const getFixturePath = (...parts) => path.resolve(fixturesPath, ...parts);

// ========= части файлов со входными данными ======
const structuredDir = 'expect_structured';
const flatDir = 'expect_flat';
const simpleDir = 'simple';
const nestedDir = 'nested';
const extJSON = '.json';
const extYML = '.yml';
const file_1 = 'file1';
const file_2 = 'file2';
const fileEmpty = 'empty';

// ========= файлы с ожидаемымыи результатами =====
const expSimple_1_1 = 'simple_1_1.txt';
const expSimple_1_2 = 'simple_1_2.txt';
const expSimple_2_1 = 'simple_2_1.txt';
const expSimple_empty_1 = 'simple_empty_1.txt';
const expSimple_1_empty = 'simple_1_empty.txt';
const exp_empty_empty = 'empty_empty.txt';

// =========== таблицы комбинаций для проверки ==========
const cases = [
  [simpleDir, file_1, simpleDir, file_2, structuredDir, expSimple_1_2],
  [simpleDir, file_2, simpleDir, file_1, structuredDir, expSimple_2_1],
  [simpleDir, file_1, simpleDir, file_1, structuredDir, expSimple_1_1],
  [simpleDir, fileEmpty, simpleDir, file_1, structuredDir, expSimple_empty_1],
  [simpleDir, file_1, simpleDir, fileEmpty, structuredDir, expSimple_1_empty],
  [simpleDir, fileEmpty, simpleDir, fileEmpty, structuredDir, exp_empty_empty],
];
const extesions = [extJSON, extYML];

// ============ тест ======================================
describe.each(extesions)('from %s-file', (ext1) => {
  describe.each(extesions)('to %s-file', (ext2) => {
    test.each(cases)(
      'from: %s/%s to --> %s/%s \n\texpected output: %s/%s',
      (dir1, file1, dir2, file2, expDir, expFile) => {
        const path1 = getFixturePath(dir1, file1 + ext1);
        const path2 = getFixturePath(dir2, file2 + ext2);
        const expectations = readFile(getFixturePath(expDir, expFile));
        expect(gendiff(path1, path2)).toEqual(expectations);
      }
    );
  });
});
