import { createGzip } from 'node:zlib';
import {
    createReadStream,
    createWriteStream,
} from 'node:fs';
import path from 'path';
import fsPromises from 'node:fs/promises';

import { getDirname } from '../utils.js';

const compress = async () => {
    const __dirname = getDirname(import.meta.url);
    const myPath = path.join(__dirname, '/files/');
    const pathFileToCompress = path.join(myPath, 'fileToCompress.txt');
    const pathArchive = path.join(myPath, 'archive.gz');
    const gzip = createGzip();
    const source = createReadStream(pathFileToCompress);
    const destination = createWriteStream(pathArchive);

    source.pipe(gzip).pipe(destination);
    await fsPromises.rm(pathFileToCompress);
};

await compress();
