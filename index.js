import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const launchApp = async () => {
  const username = process.argv[2]
    ? process.argv[2].slice(process.argv[2].indexOf("=") + 1)
    : "";
  console.log(`Welcome to the File Manager, ${username}!`);
  const rl = readline.createInterface({ input, output });
  const answer = await rl.question("What do you think of Node.js? ");

  console.log(`Thank you for your valuable feedback: ${answer}`);

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`)
})
  //rl.close();
};

launchApp();
