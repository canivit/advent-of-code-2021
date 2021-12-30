const fs = require("fs");
const func = require("./functions");

const input = fs.readFileSync("input.txt", "utf-8");
const lines = input.split("\n");
const part1Answer = func.totalSyntaxError(lines);
const part2Answer = func.middleCompletionScore(lines);
console.log("Part 1 Answer: " + part1Answer);
console.log("Part 2 Answer: " + part2Answer);
