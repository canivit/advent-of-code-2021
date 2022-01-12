const func = require("./functions");

test("Test numberOfFlashes", () => {
  const input = [
    "5483143223",
    "2745854711",
    "5264556173",
    "6141336146",
    "6357385478",
    "4167524645",
    "2176841721",
    "6882881134",
    "4846848554",
    "5283751526",
  ].join("\n");

  let flashes = func.numberOfFlashes(input, 0);
  expect(flashes).toBe(0);

  flashes = func.numberOfFlashes(input, 1);
  expect(flashes).toBe(0);

  flashes = func.numberOfFlashes(input, 2);
  expect(flashes).toBe(35);

  flashes = func.numberOfFlashes(input, 3);
  expect(flashes).toBe(80);

  flashes = func.numberOfFlashes(input, 100);
  expect(flashes).toBe(1656);
});

test("Test allFlash", () => {
  const input = [
    "5483143223",
    "2745854711",
    "5264556173",
    "6141336146",
    "6357385478",
    "4167524645",
    "2176841721",
    "6882881134",
    "4846848554",
    "5283751526",
  ].join("\n");

  const step = func.allFlash(input);
  expect(step).toBe(195);
});
