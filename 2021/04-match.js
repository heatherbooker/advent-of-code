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

const numbersToCall = input.split('\n')[1].split(',');
const boards = input.split('\n\n').slice(1);

const firstNum = numbersToCall[0];
const firstBoard = boards[0];

const tracker = [{}, {}, {}]; // one entry per board; how to generate??
// tracker[0] = { B1: false, B2: undefined, B3: true };
// check: B1-5 OR B-O#

const toMatch = new RegExp('\\b' + firstNum + '\\b');
const matched = firstBoard.match(toMatch);
console.log(firstBoard.match(toMatch));

// make input an array of nums YAY!!
// make each board an array of 5 arrays of nums
// for num in input:
//   for each board:
//     if any num in any array matches num in input, set that spot in board to NULL
//     check if any row or col has a full set of nulls
