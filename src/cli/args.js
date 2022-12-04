import { argv } from 'node:process';

const parseArgs = () => {
    const msg = argv.reduce((acc, item, i, arr) =>  item.startsWith('--') ? acc += `${item.slice(2)} is ${arr[i + 1]}, ` : acc, '').slice(0, -2);

    console.log(msg);
};

parseArgs();