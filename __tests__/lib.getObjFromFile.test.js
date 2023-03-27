import getObjFromFile from '../src/lib/getObjFromFile.js';
import getFixturePath from './test_funct/getFixturePath.js';

test('unsupported file format', () => {
  expect(() => {
    getObjFromFile(
      getFixturePath(['read_test.txt']),
    );
  }).toThrow('unsupported file type');
});
