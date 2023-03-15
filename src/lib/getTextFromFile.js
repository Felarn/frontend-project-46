import fs from 'fs';

export default (filePath) =>
  String(
    fs.readFileSync(
      filePath[0] === '/'
        ? filePath
        : new URL('../../' + filePath, import.meta.url).pathname
    )
  );
