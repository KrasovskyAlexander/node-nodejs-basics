import fsPromises from 'node:fs/promises';
import path from 'path';

import { getDirname, exists } from '../utils.js';

const create = async () => {
    const __dirname = getDirname(import.meta.url);
    const myPath = path.join(__dirname, '/files/', 'fresh.txt');
    const isExist = await exists(myPath);

    if (isExist) {
        throw new Error('FS operation failed: file already exists');
    }

    await fsPromises.writeFile(myPath, 'I am fresh and young');
};

await create();
