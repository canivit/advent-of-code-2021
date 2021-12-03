const fs = require("fs");
const func = require("./functions");

const input = fs.readFileSync("input.txt", "utf-8");
const lines = input.split("\n");
const numbers = lines.map(n => parseInt(n, 10));

console.log("Part 1 Answer: " + func.countIncreasing(numbers));
console.log("Part 2 Answer: " + func.countIncreasingWindow(numbers));