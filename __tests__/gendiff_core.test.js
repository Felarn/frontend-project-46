import readFile from '../src/lib/readFile.js';
import gendiff from '../src/gendiff_core.js';
import getFixturePath from './test_funct/getFixturePath.js';

// ========= части файлов со входными данными ======
const inputDir = 'input_files';
const resultDir = 'expected_results';
const extJSON = '.json';
const extYML = '.yml';
const extYAML = '.yaml';
const file1Name = 'file1';
const file2Name = 'file2';
const formatStylish = 'stylish';
const formatPlain = 'plain';
const formatJson = 'json';

// ========= файлы с ожидаемымыи результатами =====
const expectJson = 'json_1_2.txt';
const expectPlain = 'plain_1_2.txt';
const expectStylish = 'stylish_1_2.txt';

// =========== таблицы комбинаций для проверки ==========
const cases = [
  [file1Name, file2Name, expectStylish, formatStylish],
  [file1Name, file2Name, expectPlain, formatPlain],
  [file1Name, file2Name, expectJson, formatJson],
];
const extesions = [extJSON, extYML, extYAML];

// ============ тесты ======================================
describe.each(extesions)('from %s-file', (ext1) => {
  describe.each(extesions)('to %s-file', (ext2) => {
    test.each(cases)(
      'from: %s/%s to --> %s/%s \n\texpected output: %s/%s',
      (file1, file2, expFile, format) => {
        const path1 = getFixturePath([inputDir, file1 + ext1]);
        const path2 = getFixturePath([inputDir, file2 + ext2]);
        const expectations = readFile(getFixturePath([resultDir, expFile]));
        expect(gendiff(path1, path2, format)).toEqual(expectations);
      },
    );
  });
});
