import { Worker, isMainThread } from 'node:worker_threads';
import path from 'path';

import { getDirname } from '../utils.js';

const performCalculations = async () => {
    const __dirname = getDirname(import.meta.url);
    const worker = new Worker(path.join(__dirname, './worker.js'), {
        workerData: 10
    });
    worker.on("message", result => {
        console.log(result);
    });
};

await performCalculations();
