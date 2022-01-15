const fs = require("fs");
const func = require("./functions");

const input = fs.readFileSync("input.txt", "utf-8");
const graph = func.inputToGraph(input);

const part1Answer = func.findPaths1(graph).length;
console.log("Part 1 Answer: " + part1Answer);

const part2Answer = func.findPaths2(graph).length;
console.log("Part 2 Answer: " + part2Answer);