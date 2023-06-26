import * as readline from "node:readline/promises";
import { stdin as input, stdout as output, chdir } from "node:process";
import { currentDir } from "./subprograms/currentDir.js";
import os from "node:os";

const launchApp = async () => {
  const username = process.argv[2]
    ? process.argv[2].slice(process.argv[2].indexOf("=") + 1)
    : "Anonymus";
  console.log(`Welcome to the File Manager, ${username}!`);
  const home = os.homedir();
  chdir(home);
  currentDir();
  const rl = readline.createInterface({ input, output });

  rl.on("close", () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  });
  rl.on("line", (input) => {
    if (input === ".exit") {
      rl.close(() => {
        console.log(`Thank you for using File Manager, ${username}, goodbye!`);
      });
    }
  });
};

launchApp();
