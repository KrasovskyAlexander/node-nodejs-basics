import fsPromises from 'node:fs/promises';
import path from 'path';

import { getDirname, exists } from '../utils.js';

const list = async () => {
    const __dirname = getDirname(import.meta.url);
    const myPath = path.join(__dirname, '/files/');
    const isExist = await exists(myPath);

    if (!isExist) {
        throw new Error('FS operation failed: dir not exists');
    }

    console.log(await fsPromises.readdir(myPath));
};

await list();
