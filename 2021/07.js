const input = `16,1,2,0,4,2,7,1,2,14`;

const crabPositions = input.split(',').map(Number);
const maxPosition = Math.max(...crabPositions);

let minDifference = Infinity;

for (let position = 0; position <= maxPosition; position ++) {
  let totalDifference = 0;
  crabPositions.forEach(crab => {
    const diffForCrab = Math.abs(crab - position);
    for (let i = 0; i <= diffForCrab; i ++) {
      totalDifference += i;
    }
  });
  if (totalDifference < minDifference) {
    minDifference = totalDifference;
  }
}
console.log(minDifference);
