function sortedMedian(numbers) {
  numbers.sort((num1, num2) => num1 - num2);
  return numbers[Math.floor(numbers.length / 2)];
}

function minimumFuel1(posnArr) {
  const medianPosn = sortedMedian(posnArr);
  return posnArr.reduce((sum, posn) => {
    return sum + Math.abs(posn - medianPosn);
  }, 0);
}

function minimumFuel2(posnArr) {
  const desiredPosn = minimizingPosn(posnArr, 0, posnArr.length);
  const candidateFuel1 = incrementalFuelCost(posnArr, desiredPosn);
  const candidateFuel2 = incrementalFuelCost(posnArr, desiredPosn + 1);
  return Math.min(candidateFuel1, candidateFuel2);
}

function minimizingPosn(posnArr, low, high) {
  if (high - low === 1) {
    return posnArr[low];
  } else if (high - low === 2) {
    return Math.ceil((posnArr[low] + posnArr[low + 1]) / 2);
  } else {
    const mid = Math.ceil((low + high) / 2);
    const left = minimizingPosn(posnArr, low, mid);
    const right = minimizingPosn(posnArr, mid, high);
    return Math.floor((left + right) / 2);
  }
}

function incrementalFuelCost(posnArr, desiredPosn) {
  return posnArr.reduce((sum, posn) => {
    return sum + sumOfFirstN(Math.abs(desiredPosn - posn));
  }, 0);
}

function sumOfFirstN(n) {
  return (n * (n + 1)) / 2;
}

module.exports = { minimumFuel1, minimumFuel2, incrementalFuelCost };