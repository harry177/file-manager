import fs from "fs";

export const copy = async (source, target) => {
    if (!fs.existsSync(target)) {
      fs.cp(source, target, { recursive: true }, (err) => {
        if (err) {
          console.error("FS operation failed");
        }
      });
    } else {
      console.error("FS operation failed");
    }
  };
