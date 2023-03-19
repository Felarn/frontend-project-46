import readFile from '../src/lib/readFile.js';
import gendiff from '../src/gendiff_core.js';
import getFixturePath from '../__fixtures__/getFixturePath.js';

// ========= части файлов со входными данными ======
const structuredDir = 'expect_stylish';
const flatDir = 'expect_flat';
const simpleDir = 'simple';
const nestedDir = 'nested';
const extJSON = '.json';
const extYML = '.yml';
const extYAML = '.yaml';
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

const expNested_1_2 = 'nested_1_2.txt';

// =========== таблицы комбинаций для проверки ==========
const cases = [
  [simpleDir, file_1, simpleDir, file_2, structuredDir, expSimple_1_2],
  [simpleDir, file_2, simpleDir, file_1, structuredDir, expSimple_2_1],
  [simpleDir, file_1, simpleDir, file_1, structuredDir, expSimple_1_1],
  [simpleDir, fileEmpty, simpleDir, file_1, structuredDir, expSimple_empty_1],
  [simpleDir, file_1, simpleDir, fileEmpty, structuredDir, expSimple_1_empty],
  [simpleDir, fileEmpty, simpleDir, fileEmpty, structuredDir, exp_empty_empty],
  [nestedDir, file_1, nestedDir, file_2, structuredDir, expNested_1_2],
];
const extesions = [extJSON, extYML, extYAML];

// ============ тесты ======================================
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
