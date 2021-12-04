const fs = require("fs");
const func = require("./functions");

const input = fs.readFileSync("input.txt", "utf-8");
const binaryNumbers = input.split("\n");
console.log("Part 1 Answer: " + func.powerConsumption(binaryNumbers));
console.log("Part 2 Answer: " + func.lifeSupportRating(binaryNumbers));