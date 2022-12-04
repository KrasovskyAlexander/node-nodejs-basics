import fsPromises from 'node:fs/promises';
import path from 'path';

import { getDirname, exists } from '../utils.js';

const copy = async () => {
    const __dirname = getDirname(import.meta.url);
    const myPath = path.join(__dirname, '/files/');
    const myPathCopy = path.join(__dirname, '/files_copy/');
    const isExistFiles = await exists(myPath);
    const isExistFilesCopy = await exists(myPathCopy);

    if (!isExistFiles || isExistFilesCopy) {
        throw new Error('FS operation failed: files dir not exists or copy dir already exists');
    }

    await fsPromises.cp(myPath, myPathCopy, { recursive: true });
};

copy();
