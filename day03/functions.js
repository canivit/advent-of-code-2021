function countBits(binaryNumbers) {
  const counter = [];
  const result = binaryNumbers.reduce((acc, current) => {
    for (let i in current) {
      if (acc[i] === undefined) {
        acc[i] = { zero: 0, one: 0 };
      }
      if (current[i] == '0') {
        acc[i].zero += 1;
      } else if (current[i] == '1') {
        acc[i].one += 1;
      }
    }
    return acc;
  }, counter);
  return result;
}

function significantBits(binaryNumbers) {
  const digits = countBits(binaryNumbers).map(count => {
    if (count.zero > count.one) {
      return '0';
    } else {
      return '1';
    }
  });
  return digits.join('');
}

function powerConsumption(binaryNumbers) {
  const bits = significantBits(binaryNumbers);
  const gamma = parseInt(bits, 2);
  const epsilon = (Math.pow(2, bits.length) - 1) - gamma;
  return gamma * epsilon;
}

function o2Pred(binaryNumber, bitIndex, count) {
  if (count[bitIndex].one >= count[bitIndex].zero) {
    return binaryNumber[bitIndex] === '1';
  } else {
    return binaryNumber[bitIndex] === '0';
  }
}

function co2Pred(binaryNumber, bitIndex, count) {
  if (count[bitIndex].zero === 0) {
    return binaryNumber[bitIndex] === '1';
  } else if (count[bitIndex].one === 0) {
    return binaryNumber[bitIndex] === '0';
  }
  if (count[bitIndex].zero <= count[bitIndex].one) {
    return binaryNumber[bitIndex] === '0';
  } else {
    return binaryNumber[bitIndex] === '1';
  }
}

function filterByPred(binaryNumbers, pred) {
  let bitIndex = 0;
  while (binaryNumbers.length > 1) {
    const count = countBits(binaryNumbers);
    binaryNumbers = binaryNumbers.filter(element => {
      return pred(element, bitIndex, count);
    });
    bitIndex += 1;
  }
  return binaryNumbers[0];
}

function o2Filter(binaryNumbers) {
  return filterByPred(binaryNumbers, o2Pred);
}

function co2Filter(binaryNumbers) {
  return filterByPred(binaryNumbers, co2Pred);
}

function lifeSupportRating(binaryNumbers) {
  const o2Binary = o2Filter(binaryNumbers);
  const co2Binary = co2Filter(binaryNumbers);
  const o2Rating = parseInt(o2Binary, 2);
  const co2Rating = parseInt(co2Binary, 2);
  return o2Rating * co2Rating;
}

module.exports = { significantBits, powerConsumption, o2Filter, co2Filter, lifeSupportRating };