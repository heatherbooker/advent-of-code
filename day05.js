const TOTAL_ROWS = 128;
const TOTAL_COLUMNS = 8;

const code = 'BFFFBBFRRR';

const rowCode = code.slice(0, 7).split('');
const columnCode = code.slice(7).split('');


let rows = [];
for (let n = 0; n < TOTAL_ROWS; n++) {
  rows[n] = n;
}

rowCode.forEach(direction => {
  if (direction === 'B') {
    rows.splice(0, rows.length / 2);
  } else if (direction === 'F') {
    rows.splice(rows.length / 2);
  }
});


let columns = [];
for (let n = 0; n < TOTAL_COLUMNS; n++) {
  columns[n] = n;
}

columnCode.forEach(direction => {
  if (direction === 'R') {
    columns.splice(0, columns.length / 2);
  } else if (direction === 'L') {
    columns.splice(columns.length / 2);
  }
});


const seatID = rows[0] * 8 + columns[0]; // row * 8 + col

console.log(seatID);
