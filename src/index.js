import textColor from "./lib/textColor.js";

console.log(textColor.yellow, 'Hello! I`m insdex.js <-----');

import { program } from "commander";

program
.version('0.1.0')
.description('Compares two configuration files and shows a difference.')
.option('-f --format <type>', 'output format')
.arguments('<filepath1>, <filepath2>')

export default program.parse()