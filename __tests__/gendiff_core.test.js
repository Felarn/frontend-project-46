import readFile from '../src/lib/getTextFromFile.js';
import gendiff from '../src/gendiff_core.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs';

const fixturesPath = path.resolve(
  fileURLToPath(import.meta.url),
  '../..',
  '__fixtures__'
);

const getFixturePath = (...parts) => path.resolve(fixturesPath, ...parts);

const flatDir = 'flat_test';
const flatJSON1 = getFixturePath(flatDir, 'file1.json');
const flatJSON2 = getFixturePath(flatDir, 'file2.json');
const emptyJSON = getFixturePath('empty.json');
const emptyYML = getFixturePath('empty.json');

const expect1to1 = readFile(getFixturePath(flatDir, 'result1to1.txt'));
const expect1to2 = readFile(getFixturePath(flatDir, 'result1to2.txt'));
const expect2to1 = readFile(getFixturePath(flatDir, 'result2to1.txt'));
const expectEmptyTo1 = readFile(getFixturePath(flatDir, 'resultEmptyTo1.txt'));
const expect1ToEmpty = readFile(getFixturePath(flatDir, 'result1toEmpty.txt'));
const expectEmptyToEmpty = readFile(getFixturePath('resultEmptyToEmpty.txt'));

test('Flat json1 > json2', () => {
  expect(gendiff(flatJSON1, flatJSON2)).toEqual(expect1to2);
});

test('Flat json2 > json1', () => {
  expect(gendiff(flatJSON2, flatJSON1)).toEqual(expect2to1);
});

test('Flat json1 > json1', () => {
  expect(gendiff(flatJSON1, flatJSON1)).toEqual(expect1to1);
});

test('Flat json1 > {}', () => {
  expect(gendiff(flatJSON1, emptyJSON)).toEqual(expect1ToEmpty);
});

test('Flat {} > json1', () => {
  expect(gendiff(emptyJSON, flatJSON1)).toEqual(expectEmptyTo1);
});

test('Flat {} > {}', () => {
  expect(gendiff(emptyJSON, emptyJSON)).toEqual(expectEmptyToEmpty);
});
