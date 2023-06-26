import fs from "fs";
//const content = "I am fresh and young";

export const create = async (target) => {
  //const file = "./src/fs/files/fresh.txt";
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