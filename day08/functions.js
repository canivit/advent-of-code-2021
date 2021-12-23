function decodeInput(input) {
  const lines = input.split("\n");
  const numbers = lines.map(decodeLine);
  return numbers.reduce((sum, num) => sum + num);
}


function decodeLine(line) {
  const pair = line.split(" | ");
  const signals = pair[0].split(" ");
  const outputs = pair[1].split(" ");

  digitsToSegments = new Map();
  segmentsToDigits = new Map();

  findEasyDigits(signals, digitsToSegments, segmentsToDigits);
  findSixLength(signals, digitsToSegments, segmentsToDigits);
  findFiveLength(signals, digitsToSegments, segmentsToDigits);

  return decodeOutputs(outputs, segmentsToDigits);
}


function decodeOutputs(outputs, segmentsToDigits) {
  const digits = outputs.reduce((d, s) => {
    return d + segmentsToDigits.get([...s].sort().join(""));
  }, "");
  return parseInt(digits, 10);
}


function findEasyDigits(signals, digitsToSegments, segmentsToDigits) {
  let one = signals.find(s => s.length === 2);
  one = [...one].sort().join("");
  digitsToSegments.set("1", one);
  segmentsToDigits.set(one, "1");

  let four = signals.find(s => s.length === 4);
  four = [...four].sort().join("");
  digitsToSegments.set("4", four);
  segmentsToDigits.set(four, "4");

  let seven = signals.find(s => s.length === 3);
  seven = [...seven].sort().join("");
  digitsToSegments.set("7", seven);
  segmentsToDigits.set(seven, "7");

  let eight = signals.find(s => s.length === 7);
  eight = [...eight].sort().join("");
  digitsToSegments.set("8", eight);
  segmentsToDigits.set(eight, "8");
}


function findSixLength(signals, digitsToSegments, segmentsToDigits) {
  const filtered = signals.filter(s => s.length === 6);
  const one = digitsToSegments.get("1");
  const segmentsOfOne = [...one];

  function isZeroOrNine(s) {
    return segmentsOfOne.every(segment => s.includes(segment));
  }

  const zeroAndNine = filtered.filter(isZeroOrNine);
  let six = filtered.find(s => !isZeroOrNine(s));
  six = [...six].sort().join("");

  const four = digitsToSegments.get("4");
  const segmentsOfFour = [...four];

  function isNine(s) {
    return segmentsOfFour.every(segment => s.includes(segment));
  }

  let nine = zeroAndNine.find(isNine);
  nine = [...nine].sort().join("");

  let zero = zeroAndNine.find(s => !isNine(s));
  zero = [...zero].sort().join("");

  digitsToSegments.set("6", six);
  segmentsToDigits.set(six, "6");

  digitsToSegments.set("9", nine);
  segmentsToDigits.set(nine, "9");

  digitsToSegments.set("0", zero);
  segmentsToDigits.set(zero, "0");
}


function findFiveLength(signals, digitsToSegments, segmentsToDigits) {
  const filtered = signals.filter(s => s.length === 5);
  const one = digitsToSegments.get("1");
  const segmentsOfOne = [...one];

  function isTree(s) {
    return segmentsOfOne.every(segment => s.includes(segment));
  }

  let three = filtered.find(isTree);
  three = [...three].sort().join("");
  const twoAndFive = filtered.filter(s => !isTree(s));

  const six = digitsToSegments.get("6");

  function isFive(s) {
    return [...s].every(c => six.includes(c));
  }

  let five = twoAndFive.find(isFive);
  five = [...five].sort().join("");

  let two = twoAndFive.find(s => !isFive(s));
  two = [...two].sort().join("");

  digitsToSegments.set("3", three);
  segmentsToDigits.set(three, "3");

  digitsToSegments.set("5", five);
  segmentsToDigits.set(five, "5");

  digitsToSegments.set("2", two);
  segmentsToDigits.set(two, "2");
}

module.exports = { decodeLine , decodeInput};