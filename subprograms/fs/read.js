import fs from "fs";

export const read = async (target) => {
  fs.readFile(target, 'utf8', (err, data) => {
    if (err) {
      console.error("FS operation failed");
    } else {
        console.log(data);
    }
  });
};