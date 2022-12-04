import fsPromises from 'node:fs/promises';
import path from 'path';

import { getDirname, exists } from '../utils.js';

const read = async () => {
    const __dirname = getDirname(import.meta.url);
    const myPath = path.join(__dirname, '/files/', 'fileToRead.txt');
    const isExist = await exists(myPath);

    if (!isExist) {
        throw new Error('FS operation failed: file not exists');
    }

    console.log(await fsPromises.readFile(myPath, { encoding: 'utf-8'}));
};

await read();