import fsPromises from 'node:fs/promises';
import path from 'path';

import { getDirname, exists } from '../utils.js';

const rename = async () => {
    const __dirname = getDirname(import.meta.url);
    const myPath = path.join(__dirname, '/files/');
    const pathWrongFile = path.join(myPath, 'wrongFilename.txt');
    const pathProperFile = path.join(myPath, 'properFilename.md');

    const isExistWrongFile = await exists(pathWrongFile);
    const isExistProperFile = await exists(pathProperFile);

    if (!isExistWrongFile || isExistProperFile) {
        throw new Error('FS operation failed: wrong file not exists or proper file already exists');
    }

    await fsPromises.rename(pathWrongFile, pathProperFile)
};

await rename();
