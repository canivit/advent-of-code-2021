function initFish(input) {
  return input.split(",").reduce((fishArr, n) => {
    fishArr[n] += 1;
    return fishArr;
  }, Array(9).fill(0));
}

function simulateGrowth(input, days) {
  const fishArr = initFish(input);
  for (let d = 0; d < days; d += 1) {
    const spawn = fishArr.shift();
    fishArr.push(spawn);
    fishArr[6] += spawn;
  }
  return fishArr.reduce((sum, fish) => sum + fish, 0);
}

module.exports = {initFish, simulateGrowth};