const func = require("./functions");

test("Test firstIllegalChar", () => {
  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
    ["<", ">"],
  ]);

  // Corrupted lines:
  let line = "{([(<{}[<>[]}>{[]{[(<()>";
  expect(func.firstIllegalChar(line, map)).toBe("}");

  line = "[[<[([]))<([[{}[[()]]]";
  expect(func.firstIllegalChar(line, map)).toBe(")");

  line = "[{[{({}]{}}([{[{{{}}([]";
  expect(func.firstIllegalChar(line, map)).toBe("]");

  // Incomplete lines:
  line = "[({(<(())[]>[[{[]{<()<>>";
  expect(func.firstIllegalChar(line, map)).toBe("");

  line = "[(()[<>])]({[<{<<[]>>(";
  expect(func.firstIllegalChar(line, map)).toBe("");

  line = "{<[[]]>}<{[{[{[]{()[[[]";
  expect(func.firstIllegalChar(line, map)).toBe("");
});

test("Test complete", () => {
  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
    ["<", ">"],
  ]);

  // Corrupted lines:
  let line = "{([(<{}[<>[]}>{[]{[(<()>";
  expect(func.complete(line, map)).toEqual([]);

  line = "[[<[([]))<([[{}[[()]]]";
  expect(func.complete(line, map)).toEqual([]);

  line = "[{[{({}]{}}([{[{{{}}([]";
  expect(func.complete(line, map)).toEqual([]);

  // Incomplete lines:
  line = "[({(<(())[]>[[{[]{<()<>>";
  let comp = [..."}}]])})]"];
  expect(func.complete(line, map)).toEqual(comp);

  line = "[(()[<>])]({[<{<<[]>>(";
  comp = [...")}>]})"];
  expect(func.complete(line, map)).toEqual(comp);

  line = "(((({<>}<{<{<>}{[]{[]{}";
  comp = [..."}}>}>))))"];
  expect(func.complete(line, map)).toEqual(comp);
});

test("Test completionScore", () => {
  const closeToScore = new Map([
    [")", 1],
    ["]", 2],
    ["}", 3],
    [">", 4],
  ]);

  let completion = [..."}}]])})]"];
  expect(func.completionScore(completion, closeToScore)).toBe(288957);

  completion = [...")}>]})"];
  expect(func.completionScore(completion, closeToScore)).toBe(5566);

  completion = [..."}}>}>))))"];
  expect(func.completionScore(completion, closeToScore)).toBe(1480781);
});

test("Test totalSyntaxError", () => {
  const lines = [
    "{([(<{}[<>[]}>{[]{[(<()>",
    "[[<[([]))<([[{}[[()]]]",
    "[{[{({}]{}}([{[{{{}}([]",
    "[<(<(<(<{}))><([]([]()",
    "<{([([[(<>()){}]>(<<{{",
  ];

  expect(func.totalSyntaxError(lines)).toBe(26397);
});

test("Test middleCompletionScore", () => {
  const lines = [
    "[({(<(())[]>[[{[]{<()<>>",
    "[(()[<>])]({[<{<<[]>>(",
    "(((({<>}<{<{<>}{[]{[]{}",
    "{<[[]]>}<{[{[{[]{()[[[]",
    "<{([{{}}[<[[[<>{}]]]>[]]",
  ];

  expect(func.middleCompletionScore(lines)).toBe(288957);
});
