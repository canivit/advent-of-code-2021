const func = require("./functions");

test("Test initFish", () => {
  let input = "4,6,2,0,1,3,4,2,0,1,2,6,0,2";
  let fishArr = [3, 2, 4, 1, 2, 0, 2, 0, 0];
  expect(func.initFish(input)).toEqual(fishArr);

  input = "3,4,3,1,2";
  fishArr = [0, 1, 1, 2, 1, 0, 0, 0, 0];
  expect(func.initFish(input)).toEqual(fishArr);
});

test("Test simulateGrowth", () => {
  const input = "3,4,3,1,2";
  expect(func.simulateGrowth(input, 0)).toEqual(5);
  expect(func.simulateGrowth(input, 1)).toEqual(5);
  expect(func.simulateGrowth(input, 2)).toEqual(6);
  expect(func.simulateGrowth(input, 3)).toEqual(7);
  expect(func.simulateGrowth(input, 4)).toEqual(9);
  expect(func.simulateGrowth(input, 12)).toEqual(17);
  expect(func.simulateGrowth(input, 16)).toEqual(21);
  expect(func.simulateGrowth(input, 18)).toEqual(26);
  expect(func.simulateGrowth(input, 80)).toEqual(5934);
  expect(func.simulateGrowth(input, 256)).toEqual(26984457539);
});