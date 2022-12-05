import { Worker, isMainThread } from 'node:worker_threads';
import os from 'os';
import path from 'path';

import { getDirname } from '../utils.js';

const performCalculations = async () => {
    const __dirname = getDirname(import.meta.url);
    const startNumberForFibonacci = 10;
    const arrWithPromise = [];
    const numOfCpus = os.cpus().length;

    for (let i = 0; i < numOfCpus; i++) {
        const worker = new Promise((resolve, _) => {
            const worker = new Worker(path.join(__dirname, './worker.js'), {
                workerData: startNumberForFibonacci + i
            });
            worker.on("message", result => {
                resolve({
                    status: 'resolved',
                    data: result
                });
            });
            worker.on('error', () => {
                resolve({              //resolve is used rather than reject because we need a list of data with both successful workers and those that gave an error
                    status: 'error',
                    data: null
                })
            });
        })
        arrWithPromise.push(worker);
    }
    
    Promise.all(arrWithPromise).then(values => {
        console.log(values);
    });
};

await performCalculations();
