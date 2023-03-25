import getObjFromFile from '../src/lib/getObjFromFile.js';
import getFixturePath from './test_funct/getFixturePath.js';

test('unsupported file format', () => {
  expect(() => {
    getObjFromFile(
      getFixturePath('__fixtures__/expect_structured/empty_empty.txt'),
    );
  }).toThrow();
});
