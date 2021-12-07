const func = require("./functions");

test('Part 1, Test 1', () => {
  commands = [
    'forward 5',
    'down 5',
    'forward 8',
    'up 3',
    'down 8',
    'forward 2'
  ];
  let pair = func.move1(commands);
  let x = pair[0];
  let y = pair[1];
  expect(x).toBe(15);
  expect(y).toBe(10);
});

test('Part 2, Test 2', () => {
  commands = [
    'forward 5',
    'down 5',
    'forward 8',
    'up 3',
    'down 8',
    'forward 2'
  ];
  let pair = func.move2(commands);
  let x = pair[0];
  let y = pair[1];
  expect(x).toBe(15);
  expect(y).toBe(60);
});