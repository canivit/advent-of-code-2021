function totalSyntaxError(lines) {
  const openToClose = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
    ["<", ">"],
  ]);

  const closeToScore = new Map([
    [")", 3],
    ["]", 57],
    ["}", 1197],
    [">", 25137],
  ]);

  const illegalChars = lines.map((line) => firstIllegalChar(line, openToClose));
  const scores = illegalChars.map((char) =>
    closeToScore.has(char) ? closeToScore.get(char) : 0
  );
  const totalScore = scores.reduce((sum, score) => sum + score);
  return totalScore;
}

function middleCompletionScore(lines) {
  const openToClose = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
    ["<", ">"],
  ]);

  const closeToScore = new Map([
    [")", 1],
    ["]", 2],
    ["}", 3],
    [">", 4],
  ]);

  const completionSequences = lines.map((line) => complete(line, openToClose));
  const scores = completionSequences
    .map((sequence) => {
      return completionScore(sequence, closeToScore);
    })
    .filter((score) => score != 0);
  scores.sort((a, b) => a - b);
  const middleScore = scores[Math.floor(scores.length / 2)];
  return middleScore;
}

function completionScore(completion, closeToScore) {
  return completion.reduce((score, char) => {
    return score * 5 + closeToScore.get(char);
  }, 0);
}

function firstIllegalChar(line, openToClose) {
  return computeLine(line, openToClose).char;
}

function complete(line, openToClose) {
  const result = computeLine(line, openToClose);
  if (result.char != "") {
    return [];
  }

  const stack = result.stack;
  const comp = [];
  while (stack.length != 0) {
    comp.push(openToClose.get(stack.pop()));
  }
  return comp;
}

function computeLine(line, openToClose) {
  const stack = [];
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (openToClose.has(char)) {
      stack.push(char);
    } else if (openToClose.get(stack[stack.length - 1]) === char) {
      stack.pop();
    } else {
      return { char: char, stack: stack };
    }
  }
  return { char: "", stack: stack };
}

module.exports = {
  firstIllegalChar,
  complete,
  completionScore,
  totalSyntaxError,
  middleCompletionScore,
};
