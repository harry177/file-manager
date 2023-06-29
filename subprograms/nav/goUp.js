import { currentDir } from "../currentDir.js";

export const goUp = () => {
    try {
        process.chdir('..');
        currentDir();
    } catch (error) {
        console.log('There is no accessible folder');
    }
}