const fs = require("fs");
const func = require("./functions");
const input = fs.readFileSync("input.txt", "utf-8");
const part2Answer = func.decodeInput(input);
console.log("Part 2 Answer: " + part2Answer);