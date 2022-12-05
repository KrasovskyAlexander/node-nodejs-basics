import { workerData, parentPort } from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    //if (workerData === 12) throw new Error('gergergerg');  //  uncomment this for test if one of worker get error
    const result = nthFibonacci(workerData);
    parentPort.postMessage(result);
    process.exit();
};

sendResult();
