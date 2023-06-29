import { cwd } from "node:process";

export const currentDir = () => {
  console.log(`You are currently in ${cwd()}`);
};
