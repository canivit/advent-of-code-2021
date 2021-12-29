const func = require("./functions");
const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf-8");
const matrix = func.inputToMatrix(input);
const part1Answer = func.riskOfLowPoints(matrix);
const part2Answer = func.threeLargestBasils(matrix);
console.log("Part 1 Answer: " + part1Answer);
console.log("Part 2 Answer: " + part2Answer);
