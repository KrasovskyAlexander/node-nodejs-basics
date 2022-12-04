import { env } from 'node:process';

const parseEnv = () => {
    const msg = Object.entries(env)
        .filter(([key, _]) => key.startsWith("RSS_"))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');

    console.log(msg);
};

parseEnv();