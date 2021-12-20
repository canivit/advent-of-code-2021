function inputToLines(input) {
  return input.map(inputLine => {
    const pair = inputLine.split(" -> ");
    const p1X = parseInt(pair[0].split(",")[0], 10)
    const p1Y = parseInt(pair[0].split(",")[1], 10)
    const p2X = parseInt(pair[1].split(",")[0], 10)
    const p2Y = parseInt(pair[1].split(",")[1], 10)
    return {
      "p1": { "x": p1X, "y": p1Y },
      "p2": { "x": p2X, "y": p2Y }
    }
  });
}

function clamp(value, low, high) {
  return Math.min(Math.max(value, low), high);
}

function pointsOnLine(line) {
  const p1X = line.p1.x;
  const p1Y = line.p1.y;
  const p2X = line.p2.x;
  const p2Y = line.p2.y;
  const deltaX = clamp(p2X - p1X, -1, 1);
  const deltaY = clamp(p2Y - p1Y, -1, 1);
  let x = p1X;
  let y = p1Y;
  const points = []
  while (x != p2X || y != p2Y) {
    points.push({ "x": x, "y": y });
    x += deltaX;
    y += deltaY;
  }
  points.push(line.p2);
  return points;
}

function isHorizontalOrVertical(line) {
  return line.p1.x === line.p2.x || line.p1.y === line.p2.y;
}

function isDiagonal(line) {
  return Math.abs(line.p2.x - line.p1.x) === Math.abs(line.p2.y - line.p1.y);
}

function isHorizontalOrVerticalOrDiagonal(line) {
  return isHorizontalOrVertical(line) || isDiagonal(line);
}

function countPoints(lines, keepIf) {
  const filteredLines = lines.filter(keepIf);
  const countMap = new Map();
  filteredLines.forEach(line => {
    const points = pointsOnLine(line);
    points.forEach(point => {
      const key = JSON.stringify(point);
      if (countMap.has(key)) {
        const oldCount = countMap.get(key);
        countMap.set(key, oldCount + 1);
      } else {
        countMap.set(key, 1);
      }
    });
  });
  return countMap;
}

function countOverlaps(countMap, n) {
  return Array.from(countMap.values()).reduce((count, value) => {
    if (value >= n) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
}

function part1(input) {
  return countOverlaps(countPoints(inputToLines(input), isHorizontalOrVertical), 2);
}

function part2(input) {
  return countOverlaps(countPoints(inputToLines(input), isHorizontalOrVerticalOrDiagonal), 2);
}

module.exports = {
  inputToLines, pointsOnLine, isHorizontalOrVertical, isDiagonal,
  isHorizontalOrVerticalOrDiagonal,countPoints, countOverlaps, part1, part2
};