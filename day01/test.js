const func = require("./functions")

test('Part 1, Test 1', () => {
    arr = [1, 2, 3, 4, 5];
    expect(func.countIncreasing(arr)).toBe(4);
});

test('Part 1, Test 2', () => {
    arr = [4, 4, 4, 4, 4];
    expect(func.countIncreasing(arr)).toBe(0);
});

test('Part 1, Test 3', () => {
    arr = [9, 6, 4, 2, 2, 0];
    expect(func.countIncreasing(arr)).toBe(0);
});

test('Part 1, Test 4', () => {
    arr = [158, 226, 226, 205, 206, 207, 190, 221, 264];
    expect(func.countIncreasing(arr)).toBe(5);
});

test('Part 1, Test 5', () => {
    arr = [234, 256, 212, 198, 190, 273, 270, 180, 186];
    expect(func.countIncreasing(arr)).toBe(3);
});

test('Triple Sums, Test 1', () => {
    arr = [];
    expect(func.tripleSums(arr)).toEqual(new Array());
});

test('Triple Sums, Test 2', () => {
    arr = [2];
    expect(func.tripleSums(arr)).toEqual(new Array());
});

test('Triple Sums, Test 3', () => {
    arr = [2, 3];
    expect(func.tripleSums(arr)).toEqual(new Array());
});

test('Triple Sums, Test 4', () => {
    arr = [2, 3, 1];
    expect(func.tripleSums(arr)).toEqual([6]);
});

test('Triple Sums, Test 5', () => {
    arr = [2, 3, 1, 7, 9, 4];
    expect(func.tripleSums(arr)).toEqual([6, 11, 17, 20]);
});

test('Triple Sums, Test 6', () => {
    arr = [8, 4, 12, 3, 1, 2, 7, 8, 6, 8, 1, 5];
    expect(func.tripleSums(arr)).toEqual([24, 19, 16, 6, 10, 17, 21, 22, 15, 14]);
});

test('Part 2, Test 1', () => {
    arr = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    expect(func.countIncreasingWindow(arr)).toBe(5);
});