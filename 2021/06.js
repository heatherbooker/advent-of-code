const input = `3,4,3,1,2`;

const fishes = input.split(',').map(Number);

for (let day = 0; day < 18; day ++) {
  fishes.forEach((fish, index) => {
    if (fish === 0) {
      fishes.push(8);    // creates a new fish
      fishes[index] = 6; // resets its own timer
    } else {
      fishes[index] = fish - 1;
    }
  });
}

console.log(fishes.length);
