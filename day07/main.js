const func = require("./functions");
const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf-8");
const numbers = input.split(",").map(num => parseInt(num, 10));
console.log("Part 1 Answer: " + func.minimumFuel1(numbers));
console.log("Part 2 Answer: " + func.minimumFuel2(numbers));