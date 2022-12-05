import { fork } from 'node:child_process';
import path from 'path';

import { getDirname } from '../utils.js';


const spawnChildProcess = async (args) => {
    const __dirname = getDirname(import.meta.url);
    const myPath = path.join(__dirname, '/files/', 'script.js');

    fork(myPath, args);             // if this method little confuse you, please check screenshot on PR
};

spawnChildProcess(['this', 'arguments', 'for', 'test']);
