const fs = require("fs");
func = require('./functions');

function chunkToBoard(chunk) {
  return chunk.split('\n').map(chunkLine => {
    return chunkLineToRow(chunkLine);
  });
}

function chunkLineToRow(chunkLine) {
  return chunkLine.trim().split(/\s+/).map(n => {
    return parseInt(n, 10);
  });
}

const input = fs.readFileSync("input.txt", "utf-8");
const boardStart = input.indexOf("\n");
const toDraw = input.substring(0, boardStart).split(',').map(n => parseInt(n, 10));

const boardChunks = input.substring(boardStart).split('\n\n');
boardChunks.shift();
boardChunks.pop();
const boards = boardChunks.map(chunkToBoard);

const scores = func.playBingo(toDraw, boards);
console.log('Part 1 Answer: ' + scores[0]);
console.log('Part 2 Answer: ' + scores[scores.length - 1]);