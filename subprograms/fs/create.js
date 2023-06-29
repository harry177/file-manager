import fs from "fs";

export const create = async (target) => {
  const content = '';
  if (fs.existsSync(target)) {
    console.log("FS operation failed");
  } else {
    fs.writeFile(target, content, (err) => {
      if (err) {
        console.log("Something went wrong...");
      }
    });
  }
};