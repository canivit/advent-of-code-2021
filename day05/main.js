const func = require("./functions");
const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf-8").split("\n");
const part1Answer = func.part1(input);
const part2Answer = func.part2(input);
console.log("Part 1 Answer: " + part1Answer);
console.log("Part 2 Answer: " + part2Answer);