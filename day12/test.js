const func = require("./functions");

test("Test inputToGraph", () => {
  const input = [
    "start-A",
    "start-b",
    "A-c",
    "A-b",
    "b-d",
    "A-end",
    "b-end",
  ].join("\n");
  const graph = func.inputToGraph(input);

  expect(graph.get("start").includes("A")).toBe(true);
  expect(graph.get("start").includes("b")).toBe(true);
  expect(graph.get("start").includes("c")).toBe(false);
  expect(graph.get("start").includes("d")).toBe(false);
  expect(graph.get("start").includes("end")).toBe(false);

  expect(graph.get("b").includes("A")).toBe(true);
  expect(graph.get("b").includes("start")).toBe(true);
  expect(graph.get("b").includes("end")).toBe(true);
  expect(graph.get("b").includes("d")).toBe(true);
  expect(graph.get("b").includes("c")).toBe(false);
});

test("Test findPaths1 1", () => {
  const input = [
    "start-A",
    "start-b",
    "A-c",
    "A-b",
    "b-d",
    "A-end",
    "b-end",
  ].join("\n");
  const graph = func.inputToGraph(input);
  const paths = func.findPaths1(graph);

  const expectedPaths = [
    ["start", "A", "c", "A", "b", "A", "end"],
    ["start", "A", "c", "A", "b", "end"],
    ["start", "A", "c", "A", "end"],
    ["start", "A", "b", "A", "c", "A", "end"],
    ["start", "A", "b", "A", "end"],
    ["start", "A", "b", "end"],
    ["start", "A", "end"],
    ["start", "b", "A", "c", "A", "end"],
    ["start", "b", "A", "end"],
    ["start", "b", "end"],
  ];

  expect(paths).toEqual(expectedPaths);
});

test("Test findPaths1 2", () => {
  const input = [
    "dc-end",
    "HN-start",
    "start-kj",
    "dc-start",
    "dc-HN",
    "LN-dc",
    "HN-end",
    "kj-sa",
    "kj-HN",
    "kj-dc",
  ].join("\n");
  const graph = func.inputToGraph(input);
  const paths = func.findPaths1(graph);

  expect(paths.length).toBe(19);
});

test("Test findPaths1 3", () => {
  const input = [
    "fs-end",
    "he-DX",
    "fs-he",
    "start-DX",
    "pj-DX",
    "end-zg",
    "zg-sl",
    "zg-pj",
    "pj-he",
    "RW-he",
    "fs-DX",
    "pj-RW",
    "zg-RW",
    "start-pj",
    "he-WI",
    "zg-he",
    "pj-fs",
    "start-RW",
  ].join("\n");
  const graph = func.inputToGraph(input);
  const paths = func.findPaths1(graph);

  expect(paths.length).toBe(226);
});

test("Test findPaths2 1", () => {
  const input = [
    "start-A",
    "start-b",
    "A-c",
    "A-b",
    "b-d",
    "A-end",
    "b-end",
  ].join("\n");
  const graph = func.inputToGraph(input);
  const paths = func.findPaths2(graph);

  const expectedPaths = [
    ["start", "A", "c", "A", "c", "A", "b", "A", "end"],
    ["start", "A", "c", "A", "c", "A", "b", "end"],
    ["start", "A", "c", "A", "c", "A", "end"],
    ["start", "A", "c", "A", "b", "A", "c", "A", "end"],
    ["start", "A", "c", "A", "b", "A", "b", "A", "end"],
    ["start", "A", "c", "A", "b", "A", "b", "end"],
    ["start", "A", "c", "A", "b", "A", "end"],
    ["start", "A", "c", "A", "b", "d", "b", "A", "end"],
    ["start", "A", "c", "A", "b", "d", "b", "end"],
    ["start", "A", "c", "A", "b", "end"],
    ["start", "A", "c", "A", "end"],
    ["start", "A", "b", "A", "c", "A", "c", "A", "end"],
    ["start", "A", "b", "A", "c", "A", "b", "A", "end"],
    ["start", "A", "b", "A", "c", "A", "b", "end"],
    ["start", "A", "b", "A", "c", "A", "end"],
    ["start", "A", "b", "A", "b", "A", "c", "A", "end"],
    ["start", "A", "b", "A", "b", "A", "end"],
    ["start", "A", "b", "A", "b", "end"],
    ["start", "A", "b", "A", "end"],
    ["start", "A", "b", "d", "b", "A", "c", "A", "end"],
    ["start", "A", "b", "d", "b", "A", "end"],
    ["start", "A", "b", "d", "b", "end"],
    ["start", "A", "b", "end"],
    ["start", "A", "end"],
    ["start", "b", "A", "c", "A", "c", "A", "end"],
    ["start", "b", "A", "c", "A", "b", "A", "end"],
    ["start", "b", "A", "c", "A", "b", "end"],
    ["start", "b", "A", "c", "A", "end"],
    ["start", "b", "A", "b", "A", "c", "A", "end"],
    ["start", "b", "A", "b", "A", "end"],
    ["start", "b", "A", "b", "end"],
    ["start", "b", "A", "end"],
    ["start", "b", "d", "b", "A", "c", "A", "end"],
    ["start", "b", "d", "b", "A", "end"],
    ["start", "b", "d", "b", "end"],
    ["start", "b", "end"],
  ];

  expect(paths.length).toBe(36);
  expect(paths).toEqual(expectedPaths);
});

test("Test findPaths2 2", () => {
  const input = [
    "dc-end",
    "HN-start",
    "start-kj",
    "dc-start",
    "dc-HN",
    "LN-dc",
    "HN-end",
    "kj-sa",
    "kj-HN",
    "kj-dc",
  ].join("\n");
  const graph = func.inputToGraph(input);
  const paths = func.findPaths2(graph);

  expect(paths.length).toBe(103);
});

test("Test findPaths2 3", () => {
  const input = [
    "fs-end",
    "he-DX",
    "fs-he",
    "start-DX",
    "pj-DX",
    "end-zg",
    "zg-sl",
    "zg-pj",
    "pj-he",
    "RW-he",
    "fs-DX",
    "pj-RW",
    "zg-RW",
    "start-pj",
    "he-WI",
    "zg-he",
    "pj-fs",
    "start-RW",
  ].join("\n");
  const graph = func.inputToGraph(input);
  const paths = func.findPaths2(graph);

  expect(paths.length).toBe(3509);
});
