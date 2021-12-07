function countIncreasing(numbers) {
  let count = 0;
  let prev = Infinity;
  for (const current of numbers) {
    if (current > prev) {
      count += 1;
    }
    prev = current;
  }
  return count;
}

function tripleSums(numbers) {
  if (numbers.length < 3) {
    return new Array();
  }
  sums = new Array();
  for (let i = 2; i < numbers.length; i += 1) {
    sums.push(numbers[i] + numbers[i - 1] + numbers[i - 2]);
  }
  return sums;
}

function countIncreasingWindow(numbers) {
  return countIncreasing(tripleSums(numbers));
}

module.exports = { countIncreasing, tripleSums, countIncreasingWindow };