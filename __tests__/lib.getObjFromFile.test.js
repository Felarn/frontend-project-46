import getObjFromFile from '../src/lib/getObjFromFile';
import getFixturePath from '../__fixtures__/getFixturePath.js';

test('unsupported file format', () => {
  expect(() => {
    getObjFromFile(
      getFixturePath('__fixtures__/expect_structured/empty_empty.txt')
    );
  }).toThrow();
});
