import * as readline from "node:readline/promises";
import { stdin as input, stdout as output, chdir } from "node:process";
import { currentDir } from "./subprograms/currentDir.js";
import os from "node:os";
import { read } from "./subprograms/fs/read.js";
import { create } from "./subprograms/fs/create.js";
import { rename } from "./subprograms/fs/rename.js";
import { copy } from "./subprograms/fs/copy.js";
import { move } from "./subprograms/fs/move.js";
import { remove } from "./subprograms/fs/delete.js";
import { goUp } from "./subprograms/nav/goUp.js";
import { goDest } from "./subprograms/nav/goDest.js";

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
    const command = input.split(" ")[0];
    const action = input.split(" ")[1];
    const secondAction = input.split(" ")[2];
    if (command === "cat") read(action);
    if (command === "add") create(action);
    if (command === "rn") rename(action, secondAction);
    if (command === "cp") copy(action, secondAction);
    if (command === "mv") move(action, secondAction);
    if (command === "rm") remove(action);
    if (command === "up") goUp();
    if (command === "cd") goDest(action);
  });
};

launchApp();
