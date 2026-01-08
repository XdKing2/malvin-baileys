import makeWASocket from './Socket/index.js';
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export { makeWASocket };
export default makeWASocket;

import chalk from "chalk"

console.log(
  chalk.yellowBright(`
» Information:
  Baileys: malvin-baileys
  Developer: Malvin King ( XdKing2 )
  Status: Active
  
  Thank you for using my modified baileys.
\n`)
);

const prefix = chalk.blueBright("[BAILEYS MALVIN-XD INC]");
const time = () => chalk.redBright(`[${new Date().toLocaleTimeString("id-ID")}]`);
const methods = ["log", "info", "warn", "error", "debug", "trace"];

for (const method of methods) {
  if (typeof console[method] === "function") {
    const original = console[method].bind(console);
    console[method] = (...args) => {
      original(`${prefix} ${time()}`, ...args);
    };
  }
}

//# sourceMappingURL=index.js.map
