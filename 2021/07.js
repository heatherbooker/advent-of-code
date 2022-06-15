const input = `16,1,2,0,4,2,7,1,2,14`;

const crabPositions = input.split(',').map(Number);
const maxPosition = Math.max(...crabPositions);

function populateCrabDict() {
  const dict = {};
  crabPositions.forEach(crab => dict[crab] ? dict[crab] ++ : dict[crab] = 1);
  return dict;
}

const crabDict = populateCrabDict();

let minDifference = Infinity;

for (let position = 0; position <= maxPosition; position ++) {
  let totalDifference = 0;

  Object.keys(crabDict).forEach(crabGroup => {
    const diffForCrab = Math.abs(crabGroup - position);
    const numOfCrabs = crabDict[crabGroup];

    for (let i = 0; i <= diffForCrab; i ++) {
      const fuelUsed = i * numOfCrabs;
      totalDifference += fuelUsed;
    }
  });

  if (totalDifference < minDifference) {
    minDifference = totalDifference;
  }
}
console.log(minDifference);
