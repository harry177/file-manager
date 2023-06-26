import fs from "fs";

export const rename = async (oldPath, newPath) => {
    fs.rename(oldPath, newPath, (error) => {
      if (error) {
        console.error("FS operation failed");
      }
    });
  };