function inputToMatrix(input) {
  return input.split("\n").map((line) => Array.from(line, Number));
}

function riskOfLowPoints(matrix) {
  const lowPoints = findLowPoints(matrix);
  return lowPoints.reduce((risk, cell) => risk + cell.val + 1, 0);
}

function threeLargestBasils(matrix) {
  const lowPoints = findLowPoints(matrix);
  const basilSizes = lowPoints.map((cell) =>
    findBasilSize(matrix, cell.row, cell.col)
  );
  basilSizes.sort((size1, size2) => size1 - size2);
  const first = basilSizes.pop();
  const second = basilSizes.pop();
  const third = basilSizes.pop();
  return first * second * third;
}

function findBasilSize(matrix, rowIdx, colIdx) {
  const stack = [];
  const visited = new Set();
  stack.push({ row: rowIdx, col: colIdx, val: matrix[rowIdx][colIdx] });
  while (stack.length != 0) {
    const current = stack.pop();
    visited.add(JSON.stringify(current));
    const neighbors = adjacentNeighbors(matrix, current.row, current.col);
    const validNeighbors = neighbors.filter(
      (cell) => cell.val > current.val && cell.val != 9
    );
    validNeighbors.forEach((cell) => {
      if (!visited.has(JSON.stringify(cell))) {
        stack.push(cell);
      }
    });
  }
  return visited.size;
}

function findLowPoints(matrix) {
  const lowPoints = [];
  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
    for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx += 1) {
      const neighbors = adjacentNeighbors(matrix, rowIdx, colIdx);
      if (neighbors.every((cell) => matrix[rowIdx][colIdx] < cell.val)) {
        lowPoints.push({
          row: rowIdx,
          col: colIdx,
          val: matrix[rowIdx][colIdx],
        });
      }
    }
  }
  return lowPoints;
}

function adjacentNeighbors(matrix, rowIdx, colIdx) {
  const neighbors = [];
  if (
    rowIdx < 0 ||
    rowIdx >= matrix.length ||
    colIdx < 0 ||
    colIdx >= matrix[rowIdx].length
  ) {
    return neighbors;
  }

  if (rowIdx > 0) {
    neighbors.push({
      row: rowIdx - 1,
      col: colIdx,
      val: matrix[rowIdx - 1][colIdx],
    });
  }
  if (rowIdx < matrix.length - 1) {
    neighbors.push({
      row: rowIdx + 1,
      col: colIdx,
      val: matrix[rowIdx + 1][colIdx],
    });
  }
  if (colIdx > 0) {
    neighbors.push({
      row: rowIdx,
      col: colIdx - 1,
      val: matrix[rowIdx][colIdx - 1],
    });
  }
  if (colIdx < matrix[rowIdx].length - 1) {
    neighbors.push({
      row: rowIdx,
      col: colIdx + 1,
      val: matrix[rowIdx][colIdx + 1],
    });
  }

  return neighbors;
}

module.exports = {
  inputToMatrix,
  riskOfLowPoints,
  threeLargestBasils,
  findBasilSize,
  adjacentNeighbors,
};
