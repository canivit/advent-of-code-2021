// String -> [Array-of [Array-of Natural]]
// creates the initial energy grid from the given input
function inputToGrid(input) {
  const lines = input.split("\n");
  return lines.map((line) => Array.from(line, Number));
}

// String Natural -> Natural
// computes the total number of flashes occur in the given energy grid
// after given number of steps
function numberOfFlashes(input, steps) {
  let grid = inputToGrid(input);
  let totalFlashes = 0;
  for (let i = 0; i < steps; i += 1) {
    totalFlashes += nextStep(grid);
  }
  return totalFlashes;
}

// String -> Natural
// computes the first step when all the cells in the given grid flash
function allFlash(input) {
  let grid = inputToGrid(input);
  const size = grid.length * grid[0].length;
  var numberOfFlashes = 0;
  let step = 0;
  while (numberOfFlashes < size) {
    numberOfFlashes = nextStep(grid);
    step += 1;
  }
  return step;
}

// [Array-of [Array-of Natural]] -> Natural
// computes the number of flashes in the next step of the given energy grid
function nextStep(grid) {
  for (let rowIdx = 0; rowIdx < grid.length; rowIdx += 1) {
    for (let colIdx = 0; colIdx < grid[rowIdx].length; colIdx += 1) {
      grid[rowIdx][colIdx] += 1;
    }
  }

  const flashSet = new Set();
  let nextFlash = true;
  while (nextFlash) {
    nextFlash = false;
    for (let rowIdx = 0; rowIdx < grid.length; rowIdx += 1) {
      for (let colIdx = 0; colIdx < grid[rowIdx].length; colIdx += 1) {
        if (flash(rowIdx, colIdx, grid, flashSet)) {
          nextFlash = true;
        }
      }
    }
  }

  for (let posnString of flashSet) {
    const posn = JSON.parse(posnString);
    grid[posn.r][posn.c] = 0;
  }

  return flashSet.size;
}

// Natural Natural [Array-of [Array-of Natural]] [Set-of String] -> Natural
// flashes the cell at the given position if possible.
// if the cell flashes, increases the energy levels of adjacent cells by one
// and adds the position of the cell to the given set.
// returns true if at least one of the adjacent cells is going to flash next
// returns false otherwise
function flash(rowIdx, colIdx, grid, set) {
  const posnString = JSON.stringify({ r: rowIdx, c: colIdx });
  if (grid[rowIdx][colIdx] > 9 && !set.has(posnString)) {
    set.add(posnString);

    let neighbors = [];
    neighbors.push({ r: rowIdx - 1, c: colIdx });
    neighbors.push({ r: rowIdx + 1, c: colIdx });
    neighbors.push({ r: rowIdx, c: colIdx - 1 });
    neighbors.push({ r: rowIdx, c: colIdx + 1 });
    neighbors.push({ r: rowIdx - 1, c: colIdx - 1 });
    neighbors.push({ r: rowIdx - 1, c: colIdx + 1 });
    neighbors.push({ r: rowIdx + 1, c: colIdx - 1 });
    neighbors.push({ r: rowIdx + 1, c: colIdx + 1 });

    neighbors = neighbors.filter(
      (n) =>
        n.r >= 0 && n.r <= grid.length - 1 && n.c >= 0 && n.c <= grid[0].length
    );
    neighbors.forEach((n) => (grid[n.r][n.c] += 1));
    const energies = neighbors.map((n) => grid[n.r][n.c]);
    return energies.some((e) => e > 9);
  }
  return false;
}

module.exports = { numberOfFlashes, allFlash };
