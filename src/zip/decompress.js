import { createGunzip } from 'node:zlib';
import {
    createReadStream,
    createWriteStream,
} from 'node:fs';
import path from 'path';
import fsPromises from 'node:fs/promises';

import { getDirname } from '../utils.js';

const decompress = async () => {
    const __dirname = getDirname(import.meta.url);
    const myPath = path.join(__dirname, '/files/');
    const pathFileToCompress = path.join(myPath, 'fileToCompress.txt');
    const pathArchive = path.join(myPath, 'archive.gz');
    const source = createReadStream(pathArchive);
    const destination  = createWriteStream(pathFileToCompress);
    const unzip = createGunzip();

    source.pipe(unzip).pipe(destination);
    await fsPromises.rm(pathArchive);
};

await decompress();
