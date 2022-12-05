import { stdin, stdout } from "process";
import { Transform } from "stream";

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, _, callback) {
            callback(null, [...chunk.toString()].reverse().join(""));
        },
    });
    stdin.pipe(reverse).pipe(stdout);
};

await transform();
