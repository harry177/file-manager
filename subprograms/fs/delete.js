import fs from "fs";

export const remove = async (target) => {
    fs.unlink(target, (err) => {
        if (err) {
            console.error("FS operation failed");
        }
    }) 
};