import fs from "fs";
import { cwd } from "node:process";

export const list = () => {
  fs.readdir(cwd(), (error, files) => {
    if (error) {
      console.log("Something went wrong");
    } else {
      const data = [];
      files.forEach((file) => {
        const stats = fs.statSync(file);
        data.push({ name: file, type: stats.isDirectory() ? "directory" : "file" });
      });
      data.sort((a, b) => a.type < b.type ? -1 : 1);
      console.table(data);
    }
  });
};
