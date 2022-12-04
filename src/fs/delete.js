import fsPromises from 'node:fs/promises';
import path from 'path';

import { getDirname, exists } from '../utils.js';

const remove = async () => {
    const __dirname = getDirname(import.meta.url);
    const myPath = path.join(__dirname, '/files/', 'fileToRemove.txt');
    const isExist = await exists(myPath);

    if (!isExist) {
        throw new Error('FS operation failed: file not exists');
    }

    await fsPromises.rm(myPath);
};

await remove();