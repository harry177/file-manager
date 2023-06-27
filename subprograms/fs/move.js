import fs from "fs";

export const move = async (source, target) => {
  if (!fs.existsSync(target)) {
    fs.cp(source, target, { recursive: true }, (err) => {
      if (err) {
        console.error("FS operation failed");
      } else {
        fs.unlink(source, (err) => {
          if (err) {
            console.error("FS operation failed");
          }
        });
      }
    });
  } else {
    console.error("FS operation failed");
  }
};
