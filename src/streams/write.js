import { stdin } from 'node:process';
import fs from 'node:fs';
import path from 'path';

import { getDirname } from '../utils.js';

const write = async () => {
    const __dirname = getDirname(import.meta.url);
    const myPath = path.join(__dirname, '/files/', 'fileToWrite.txt');
    const writableStream = fs.createWriteStream(myPath);

    stdin.pipe(writableStream);
};

await write();
