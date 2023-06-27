import { currentDir } from "../currentDir.js";

export const goDest = (target) => {
    try {
        process.chdir(target);
        currentDir();
    } catch (error) {
        console.log('There is no accessible folder');
    }
}