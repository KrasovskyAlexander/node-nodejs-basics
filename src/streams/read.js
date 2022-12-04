import { stdout } from 'node:process';
import fs from 'node:fs';
import path from 'path';

import { getDirname } from '../utils.js';

const read = async () => {
    const __dirname = getDirname(import.meta.url);
    const myPath = path.join(__dirname, '/files/', 'fileToRead.txt');
    const readableStream = fs.createReadStream(myPath, 'utf8');

    readableStream.on('data', (chunk) => {
        stdout.write(chunk);
    });

    readableStream.on('end', () => {
        console.log('\nend');
    });
};

await read();
