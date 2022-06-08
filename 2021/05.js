const input = `
0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2
`;

//SET UP FLOOR ARRAY

function findStart(line) {
  if (line[0].x < line[1].x || line[0].y < line[1].y) {
    return { start: line[0], end: line[1] };
  } else {
    return { start: line[1], end: line[0] };
  }
}

// decode points
const inputLines = input.split('\n').filter(x => x.length);
const lines = inputLines.map(line => {
  const pointsString = line.split(' -> ');
  const points = pointsString.map(s => {
    const [x, y] = s.split(',').map(Number);
    return { x, y };
  });
  return findStart(points);
});


function findFloorSize(lines) {
  const maxX = lines.reduce((max, curr) => curr.start.x > max ? curr.start.x : max, 0);
  const maxY = lines.reduce((max, curr) => curr.start.y > max ? curr.start.y : max, 0);
  return Math.max(maxX, maxY) + 1; // graph starts at 0, so we add 1 for its space
}
const size = findFloorSize(lines);
const floor = new Array(size).fill(true).map(() => new Array(size).fill(0));

// ACTUALLY CHECK WHERE VENTS ARE

function markVents() {
  lines.forEach(line => {
    if (line.start.x !== line.end.x && line.start.y === line.end.y) { // horizontal line
      for (let i = line.start.x; i <= line.end.x; i ++) {
        floor[i][line.start.y] = floor[i][line.start.y] + 1; // line.end.y should be the same, doesnt matter which one we use
      }
    } else if (line.start.y !== line.end.y && line.start.x === line.end.x) { // vertical line
      for (let i = line.start.y; i <= line.end.y; i ++) {
        floor[line.start.x][i] ++; // line.end.x should be the same, doesnt matter which one we use
      }
    } else { // diagonal line
      let xIndex = line.start.x;
      let yIndex = line.start.y;

      while (xIndex <= line.end.x || yIndex <= line.end.y) {
        floor[xIndex][yIndex] = floor[xIndex][yIndex] + 1;

        xIndex = xIndex <= line.end.x ? xIndex + 1 : xIndex - 1;
        yIndex = yIndex <= line.end.y ? yIndex + 1 : yIndex - 1;
      }
    }
  });
}

function countOverlaps() {
  return floor.reduce((totalOverlaps, currentArray) => {
    return totalOverlaps + currentArray.filter(numberOfVents => numberOfVents >= 2).length
  }, 0);
}

markVents();
console.log(countOverlaps());
