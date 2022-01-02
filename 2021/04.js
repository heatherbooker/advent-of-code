const input = `
7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7
`;

// parse input

const sections = input.split('\n');
const numbersToCall = sections[1].split(',').map(Number);
console.log(numbersToCall);

const boards = [];
for (let i = 2; i < sections.length - 1; i++) {
  const isStartOfNewBoard = sections[i].length === 0;
  if (isStartOfNewBoard) {
    const board = sections.slice(i+1, i+6);
    const prettifiedBoard = board.map(row => row.split(' ').filter(x => x.length).map(Number));
    boards.push(prettifiedBoard);
  }
}
console.log(boards);


callerLoop: for (const calledNumber of numbersToCall) {
  for (const board of boards) {
    for (const row of board) {
      // mark called number
      const indexOfCalledNumber = row.indexOf(calledNumber);
      if (indexOfCalledNumber > -1) {
        row[indexOfCalledNumber] = null;
      }
      // check horizontal
      if (row.every(number => number === null)) {
        break callerLoop;
      }
    };
  };
};

console.log(boards);

// check boards
/*
for (let i = 0; i < numbersToCall.length; i++) {
  boards.forEach(board => {
    // determine if have row or col of Xs
    for (let k = 0; k < board.length; k++) {
      if (board[
    board.forEach(row => {
      const numsLeft = row.filter(value => value != 'X');
      if (numsLeft.length === 0) { break; }
      if (board.map(row => row[0]

      row.forEach((number, j) => {
        if (number == numbersToCall[i]) {
          row[j] = 'X';
        }
      });
    });
  });
}
*/

// calculate score
