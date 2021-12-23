const func = require("./functions");

test("Test decodeLine", () => {
  let line = "acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab "
    + "| cdfeb fcadb cdfeb cdbaf";
  expect(func.decodeLine(line)).toBe(5353);

  line = "be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb "
    + "| fdgacbe cefdb cefbgd gcbe";
  expect(func.decodeLine(line)).toBe(8394);

  line = "edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec "
    + "| fcgedb cgb dgebacf gc"
  expect(func.decodeLine(line)).toBe(9781);
})