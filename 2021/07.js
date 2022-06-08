const input = `16,1,2,0,4,2,7,1,2,14`;

const crabPositions = input.split(',').map(Number);
const maxPosition = Math.max(...crabPositions);

let minDifference = Infinity;

for (let position = 0; position <= maxPosition; position ++) {
  let difference = 0;
  crabPositions.forEach(crab => {
    difference += Math.abs(crab - position);
  });
  if (difference < minDifference) {
    minDifference = difference;
  }
}
console.log(minDifference);
