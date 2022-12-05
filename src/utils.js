import fsPromises from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const getDirname = (url) => path.dirname(fileURLToPath(url));

export const exists = async (path) => {  
    try {
        await fsPromises.access(path)
        return true
    } catch {
        return false
    }
}
