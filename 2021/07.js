const input = `16,1,2,0,4,2,7,1,2,14`;

const crabPositions = input.split(',').map(Number);
const maxPosition = Math.max(...crabPositions);
const crabDict = {};
crabPositions.forEach(crab => crabDict[crab] ? crabDict[crab] ++ : crabDict[crab] = 1);

let minDifference = Infinity;

for (let position = 0; position <= maxPosition; position ++) {
  let totalDifference = 0;
  Object.keys(crabDict).forEach(crabGroup => {
    const diffForCrab = Math.abs(crabGroup - position);
    const numOfCrabs = crabDict[crabGroup];
    for (let i = 0; i <= diffForCrab; i ++) {
      totalDifference += (i * numOfCrabs);
    }
  });
  if (totalDifference < minDifference) {
    minDifference = totalDifference;
  }
}
console.log(minDifference);
