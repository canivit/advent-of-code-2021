// Graph is a [Map-of String [Set-of String]]

// inputToGraph: String -> Graph
// creates a graph from the given input
function inputToGraph(input) {
  const lines = input.split("\n");
  const graph = new Map();

  for (let line of lines) {
    node1 = line.split("-")[0];
    node2 = line.split("-")[1];

    if (graph.has(node1)) {
      graph.get(node1).push(node2);
    } else {
      graph.set(node1, new Array(node2));
    }

    if (graph.has(node2)) {
      graph.get(node2).push(node1);
    } else {
      graph.set(node2, new Array(node1));
    }
  }

  return graph;
}

// findAllPaths: Graph [String [Map-of String Natural] -> Boolean] -> [Array-of [Array-of String]]
// find all paths from start node to end node
// visiting neighbors is limited by the given function
function findAllPaths(graph, isNeighborValid) {
  function find(current, path, counter) {
    const copyPath = Array.from(path);
    copyPath.push(current);

    const copyCounter = new Map(counter);
    if (copyCounter.has(current)) {
      copyCounter.set(current, copyCounter.get(current) + 1);
    } else {
      copyCounter.set(current, 1);
    }

    if (current === "end") {
      return [copyPath];
    }

    const neighbors = graph.get(current);
    const validNeighbors = neighbors.filter((neighbor) =>
      isNeighborValid(neighbor, copyCounter)
    );
    const paths = validNeighbors.map((neighbor) => {
      return find(neighbor, copyPath, copyCounter);
    });
    return paths.flat();
  }
  return find("start", new Array(), new Map());
}

// findPaths1 : Graph -> [Array-of [Array-of String]]
// find all paths from start node to end node
// without visiting lower case nodes more than once
function findPaths1(graph) {
  function isNeighborValid(neighbor, counter) {
    return neighbor === neighbor.toUpperCase() || !counter.has(neighbor);
  }
  return findAllPaths(graph, isNeighborValid);
}

// findPaths2 : Graph -> [Array-of [Array-of String]]
// find all paths from start node to end node
// by visiting just one lower case node at most two times
// and all other lower case nodes not more than once
function findPaths2(graph) {
  function isNeighborValid(neighbor, counter) {
    if (neighbor === "start") {
      return false;
    }
    if (neighbor === neighbor.toUpperCase()) {
      return true;
    }
    const lowTwice = Array.from(counter.keys()).filter(
      (node) => node === node.toLowerCase() && counter.get(node) > 1
    );
    if (lowTwice.length === 0) {
      return true;
    } else {
      return !counter.has(neighbor);
    }
  }
  return findAllPaths(graph, isNeighborValid);
}

module.exports = { inputToGraph, findPaths1, findPaths2 };
