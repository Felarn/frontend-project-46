import path from 'node:path';
import { fileURLToPath } from 'node:url';

const fixturesPath = path.resolve(
  fileURLToPath(import.meta.url),
  '../../../__fixtures__',
);

const getFixturePath = (...parts) => path.resolve(fixturesPath, ...parts);

export default getFixturePath;
