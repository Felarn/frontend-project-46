import fs from 'fs';
import { resolve } from 'path';

export default (filePath) => String(
  fs.readFileSync(resolve(process.cwd(), filePath)),
);
