const func = require("./functions");
const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf-8");
console.log("Part 1 Answer: " + func.simulateGrowth(input, 80));
console.log("Part 2 Answer: " + func.simulateGrowth(input, 256));