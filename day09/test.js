const func = require("./functions");

test("Test inputToMatrix", () => {
  const input = "439487\n649331\n098123\n529465";
  const matrix = [
    [4, 3, 9, 4, 8, 7],
    [6, 4, 9, 3, 3, 1],
    [0, 9, 8, 1, 2, 3],
    [5, 2, 9, 4, 6, 5],
  ];
  expect(func.inputToMatrix(input)).toEqual(matrix);
});

test("Test adjacentNeighbors", () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let neighbors = [
    { row: 1, col: 0, val: 4 },
    { row: 0, col: 1, val: 2 },
  ];
  expect(func.adjacentNeighbors(matrix, 0, 0)).toEqual(neighbors);

  neighbors = [
    { row: 1, col: 1, val: 5 },
    { row: 0, col: 0, val: 1 },
    { row: 0, col: 2, val: 3 },
  ];
  expect(func.adjacentNeighbors(matrix, 0, 1)).toEqual(neighbors);

  neighbors = [
    { row: 0, col: 2, val: 3 },
    { row: 2, col: 2, val: 9 },
    { row: 1, col: 1, val: 5 },
  ];
  expect(func.adjacentNeighbors(matrix, 1, 2)).toEqual(neighbors);

  neighbors = [
    { row: 1, col: 2, val: 6 },
    { row: 2, col: 1, val: 8 },
  ];
  expect(func.adjacentNeighbors(matrix, 2, 2)).toEqual(neighbors);

  neighbors = [
    { row: 0, col: 1, val: 2 },
    { row: 2, col: 1, val: 8 },
    { row: 1, col: 0, val: 4 },
    { row: 1, col: 2, val: 6 },
  ];
  expect(func.adjacentNeighbors(matrix, 1, 1)).toEqual(neighbors);
});

test("Test riskOfLowPoints", () => {
  const matrix = [
    [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
    [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
    [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
    [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
    [9, 8, 9, 9, 9, 6, 5, 6, 7, 8],
  ];
  expect(func.riskOfLowPoints(matrix)).toBe(15);
});

test("Test findBasil", () => {
  const matrix = [
    [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
    [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
    [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
    [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
    [9, 8, 9, 9, 9, 6, 5, 6, 7, 8],
  ];

  expect(func.findBasilSize(matrix, 0, 1)).toBe(3);
  expect(func.findBasilSize(matrix, 0, 9)).toBe(9);
  expect(func.findBasilSize(matrix, 2, 2)).toBe(14);
  expect(func.findBasilSize(matrix, 4, 6)).toBe(9);
});

test("Test threeLargestBasils", () => {
  const matrix = [
    [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
    [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
    [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
    [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
    [9, 8, 9, 9, 9, 6, 5, 6, 7, 8],
  ];
  expect(func.threeLargestBasils(matrix)).toBe(1134);
});
