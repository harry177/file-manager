import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream";

export const compress = async (source, target) => {
  const brotli = zlib.createBrotliCompress();
  const readableStream = fs.createReadStream(source, "utf8");
  const writableStream = fs.createWriteStream(target);

  pipeline(readableStream, brotli, writableStream, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
  fs.unlink(source, (err) => {
    if (err) {
      console.error("FS operation failed");
    }
  });
};
