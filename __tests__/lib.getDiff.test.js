import getDiff from '../src/lib/getDiff.js';
import getObjFromFile from '../src/lib/getObjFromFile.js';
import getFixturePath from '../__fixtures__/getFixturePath.js';
getDiff;

const pathFile1 = getFixturePath('simple/file1.json');
const pathFile2 = getFixturePath('simple/file2.json');
const pathExpect = getFixturePath('diffObj.json');
const expectedResult = getObjFromFile(pathExpect);
const obj1 = getObjFromFile(pathFile1);
const obj2 = getObjFromFile(pathFile2);

test('generation of Diff obj', () => {
  // expect(getDiff(obj1, obj2)).toEqual(expectedResult);
});
