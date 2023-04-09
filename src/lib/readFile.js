import fs from 'fs';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default (filePath) => String(
  fs.readFileSync(resolve(__dirname, '../..', filePath)),
);
