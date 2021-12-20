const { pointsOnStraightLine, isHorizontalOrVertical } = require('./functions');

func = require('./functions');

const exampleInput = [
  "0,9 -> 5,9",
  "8,0 -> 0,8",
  "9,4 -> 3,4",
  "2,2 -> 2,1",
  "7,0 -> 7,4",
  "6,4 -> 2,0",
  "0,9 -> 2,9",
  "3,4 -> 1,4",
  "0,0 -> 8,8",
  "5,5 -> 8,2"
];

test('Test inputToLines', () => {
  const input = [
    "0,9 -> 5,9",
    "8,0 -> 0,8",
    "9,4 -> 3,4",
    "2,2 -> 2,1",
    "7,0 -> 7,4"
  ];
  const lines = [
    { "p1": { "x": 0, "y": 9 }, "p2": { "x": 5, "y": 9 } },
    { "p1": { "x": 8, "y": 0 }, "p2": { "x": 0, "y": 8 } },
    { "p1": { "x": 9, "y": 4 }, "p2": { "x": 3, "y": 4 } },
    { "p1": { "x": 2, "y": 2 }, "p2": { "x": 2, "y": 1 } },
    { "p1": { "x": 7, "y": 0 }, "p2": { "x": 7, "y": 4 } }
  ];
  expect(func.inputToLines(input)).toEqual(lines);
});

test('Test pointsOnLine Horizontal', () => {
  const line1 = { "p1": { "x": 3, "y": 8 }, "p2": { "x": 8, "y": 8 } };
  const line1Points = [
    { "x": 3, "y": 8 },
    { "x": 4, "y": 8 },
    { "x": 5, "y": 8 },
    { "x": 6, "y": 8 },
    { "x": 7, "y": 8 },
    { "x": 8, "y": 8 }
  ];
  expect(func.pointsOnLine(line1)).toEqual(line1Points);

  const line2 = { "p1": { "x": 6, "y": 5 }, "p2": { "x": 2, "y": 5 } };
  const line2Points = [
    { "x": 6, "y": 5 },
    { "x": 5, "y": 5 },
    { "x": 4, "y": 5 },
    { "x": 3, "y": 5 },
    { "x": 2, "y": 5 }
  ];
  expect(func.pointsOnLine(line2)).toEqual(line2Points);
});

test('Test pointsOnLine Vertical', () => {
  const line1 = { "p1": { "x": 13, "y": 12 }, "p2": { "x": 13, "y": 15 } };
  const line1Points = [
    { "x": 13, "y": 12 },
    { "x": 13, "y": 13 },
    { "x": 13, "y": 14 },
    { "x": 13, "y": 15 },
  ];
  expect(func.pointsOnLine(line1)).toEqual(line1Points);

  const line2 = { "p1": { "x": 13, "y": 12 }, "p2": { "x": 13, "y": 9 } };
  const line2Points = [
    { "x": 13, "y": 12 },
    { "x": 13, "y": 11 },
    { "x": 13, "y": 10 },
    { "x": 13, "y": 9 }
  ];
  expect(func.pointsOnLine(line2)).toEqual(line2Points);
});

test('Test pointsOnLine Diagonal', () => {
  const line1 = { "p1": { "x": 10, "y": 5 }, "p2": { "x": 5, "y": 0 } };
  const line1Points = [
    { "x": 10, "y": 5 },
    { "x": 9, "y": 4 },
    { "x": 8, "y": 3 },
    { "x": 7, "y": 2 },
    { "x": 6, "y": 1 },
    { "x": 5, "y": 0 },
  ];
  expect(func.pointsOnLine(line1)).toEqual(line1Points);

  const line2 = { "p1": { "x": 10, "y": 5 }, "p2": { "x": 8, "y": 7 } };
  const line2Points = [
    { "x": 10, "y": 5 },
    { "x": 9, "y": 6 },
    { "x": 8, "y": 7 }
  ];
  expect(func.pointsOnLine(line2)).toEqual(line2Points);

  const line3 = { "p1": { "x": 10, "y": 5 }, "p2": { "x": 13, "y": 8 } };
  const line3Points = [
    { "x": 10, "y": 5 },
    { "x": 11, "y": 6 },
    { "x": 12, "y": 7 },
    { "x": 13, "y": 8 },
  ];
  expect(func.pointsOnLine(line3)).toEqual(line3Points);

  const line4 = { "p1": { "x": 10, "y": 5 }, "p2": { "x": 14, "y": 1 } };
  const line4Points = [
    { "x": 10, "y": 5 },
    { "x": 11, "y": 4 },
    { "x": 12, "y": 3 },
    { "x": 13, "y": 2 },
    { "x": 14, "y": 1 }
  ];
  expect(func.pointsOnLine(line4)).toEqual(line4Points);
});

test('Test isHorizontalOrVertical', () => {
  const line1 = { "p1": { "x": 4, "y": 3 }, "p2": { "x": 4, "y": 0 } };
  expect(func.isHorizontalOrVertical(line1)).toBeTruthy();

  const line2 = { "p1": { "x": 4, "y": 3 }, "p2": { "x": 7, "y": 3 } };
  expect(func.isHorizontalOrVertical(line2)).toBeTruthy();

  const line3 = { "p1": { "x": 5, "y": 2 }, "p2": { "x": 8, "y": 5 } };
  expect(func.isHorizontalOrVertical(line3)).toBeFalsy();

  const line4 = { "p1": { "x": 7, "y": 6 }, "p2": { "x": 2, "y": 8 } };
  expect(func.isHorizontalOrVertical(line4)).toBeFalsy();
});

test('Test isDiagonal', () => {
  const line1 = { "p1": { "x": 6, "y": 2 }, "p2": { "x": 2, "y": 6 } };
  expect(func.isDiagonal(line1)).toBeTruthy();

  const line2 = { "p1": { "x": 6, "y": 2 }, "p2": { "x": 4, "y": 0 } };
  expect(func.isDiagonal(line2)).toBeTruthy();

  const line3 = { "p1": { "x": 6, "y": 2 }, "p2": { "x": 11, "y": 7 } };
  expect(func.isDiagonal(line3)).toBeTruthy();

  const line4 = { "p1": { "x": 6, "y": 5 }, "p2": { "x": 9, "y": 8 } };
  expect(func.isDiagonal(line4)).toBeTruthy();

  const line5 = { "p1": { "x": 6, "y": 5 }, "p2": { "x": 6, "y": 8 } };
  expect(func.isDiagonal(line5)).toBeFalsy();

  const line6 = { "p1": { "x": 6, "y": 5 }, "p2": { "x": 9, "y": 5 } };
  expect(func.isDiagonal(line6)).toBeFalsy();

  const line7 = { "p1": { "x": 2, "y": 7 }, "p2": { "x": 0, "y": 4 } };
  expect(func.isDiagonal(line7)).toBeFalsy();
});

test('Test countPoints Horizontal or Vertical', () => {
  const lines = func.inputToLines(exampleInput);
  const map = func.countPoints(lines, func.isHorizontalOrVertical);

  expect(map.size).toBe(21);

  let key = JSON.stringify({ "x": 3, "y": 4 });
  expect(map.get(key)).toBe(2);

  key = JSON.stringify({ "x": 5, "y": 9 });
  expect(map.get(key)).toBe(1);

  key = JSON.stringify({ "x": 7, "y": 4 });
  expect(map.get(key)).toBe(2);
});

test('Test countPoints Horizontal, Vertical, or Diagonal', () => {
  const lines = func.inputToLines(exampleInput);
  const map = func.countPoints(lines, func.isHorizontalOrVerticalOrDiagonal);

  expect(map.size).toBe(39);

  let key = JSON.stringify({ "x": 4, "y": 4 });
  expect(map.get(key)).toBe(3);

  key = JSON.stringify({ "x": 7, "y": 3 });
  expect(map.get(key)).toBe(2);

  key = JSON.stringify({ "x": 1, "y": 7 });
  expect(map.get(key)).toBe(1);
});

test('Test countOverlaps Horizontal or Vertical', () => {
  const lines = func.inputToLines(exampleInput);
  const map = func.countPoints(lines, func.isHorizontalOrVertical);
  const countOfTwoOrMore = func.countOverlaps(map, 2);
  expect(countOfTwoOrMore).toBe(5);
});

test('Test countOverlaps Horizontal, Vertical, or Diagonal', () => {
  const lines = func.inputToLines(exampleInput);
  const map = func.countPoints(lines, func.isHorizontalOrVerticalOrDiagonal);
  const countOfTwoOrMore = func.countOverlaps(map, 2);
  expect(countOfTwoOrMore).toBe(12);
});