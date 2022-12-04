import { createHash } from 'crypto'
import fsPromises from 'node:fs/promises';
import path from 'path';

import { getDirname } from '../utils.js';


const calculateHash = async () => {
    const __dirname = getDirname(import.meta.url);
    const myPath = path.join(__dirname, '/files/', 'fileToCalculateHashFor.txt');
    const text = await fsPromises.readFile(myPath, { encoding: 'utf8' });
    const hash = createHash('sha256').update(text).digest('hex');

    console.log(hash)
};

await calculateHash();