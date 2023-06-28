import fs from "fs";
import { createHash } from "crypto";

export const hash = async (target) => {
    const hash = createHash("sha256");
    hash.update(target);
    console.log(hash.digest("hex"));
  };