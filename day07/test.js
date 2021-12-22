const func = require("./functions");

test("Test minimumFuel1", () => {
  const numbers = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];
  expect(func.minimumFuel1(numbers)).toBe(37);
});

test("Test incrementalFuelCost", () => {
  let numbers = [7, 15, 2, 1, 0, 1, 3];
  // 4
  expect(func.incrementalFuelCost(numbers, 4)).toBe(98);

  // 10
  numbers = [6, 19, 7, 23, 14, 3, 2, 7];
  expect(func.incrementalFuelCost(numbers, 10)).toBe(232);

  // 5
  numbers = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];
  expect(func.incrementalFuelCost(numbers, 5)).toBe(168);
});

test("Test minimumFuel2", () => {
  let numbers = [7, 15, 2, 1, 0, 1, 3];
  expect(func.minimumFuel2(numbers)).toBe(98);

  numbers = [6, 19, 7, 23, 14, 3, 2, 7];
  expect(func.minimumFuel2(numbers)).toBe(232);

  numbers = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];
  expect(func.minimumFuel2(numbers)).toBe(168);
});
