import { cpus } from "os";

export const getHost = () => {
    const cpusAmount = cpus().length;
    const model = cpus()[0].model;
    const speed = `${cpus()[0].speed / 1000} Ghz`
  console.log(`cpus: ${cpusAmount}, model: ${model}, speed: ${speed}`);
};
