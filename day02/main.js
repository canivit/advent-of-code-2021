const fs = require("fs");
const func = require("./functions");

const input = fs.readFileSync("input.txt", "utf-8");
const commands = input.split("\n");

let posn = func.move1(commands);
let x = posn[0];
let y = posn[1];
console.log("Part 1 Answer: " + (x * y));

posn = func.move2(commands);
x = posn[0];
y = posn[1];
console.log("Part 2 Answer: " + (x * y));