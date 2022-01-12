const fs = require("fs");
const func = require("./functions");
const input = fs.readFileSync("input.txt", "utf-8");

const part1Answer = func.numberOfFlashes(input, 100);
const part2Answer = func.allFlash(input);
console.log("Part 1 Answer: " + part1Answer);
console.log("Part 2 Answer: " + part2Answer);
