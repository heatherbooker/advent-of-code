const input = `3,4,3,1,2`;

function updateFish(fishByAge) {
  const newFishes = new Array(9).fill(0);
  fishByAge.forEach((numOfFish, age) => {
    if (age === 0) {
      newFishes[8] = numOfFish; // new baby fish
      newFishes[6] = numOfFish; // reset their own count
    } else {
      newFishes[age - 1] = newFishes[age - 1] + numOfFish;
    }
  });
  return newFishes;
}

function inputToFishArray(string) {
  const fishes = string.split(',').map(Number);
  let fishByAge = new Array(9).fill(0); // it isn't really age, but close enough
  fishes.forEach(fish => fishByAge[fish] ++);
  return fishByAge;
}

function solve() {
  let fishByAge = inputToFishArray(input);

  for (let day = 0; day < 256; day ++) {
    fishByAge = updateFish(fishByAge);
  }
  const total = fishByAge.reduce((sum, numOfFishAtAge) => sum + numOfFishAtAge, 0);
  console.log(total);
}

solve();
