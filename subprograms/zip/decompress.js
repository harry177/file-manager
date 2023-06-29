import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream";

export const decompress = async (source, target) => {
  const brotli = zlib.createBrotliDecompress();
  const readableStream = fs.createReadStream(source);
  const writableStream = fs.createWriteStream(target, "utf-8");

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
