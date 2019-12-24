const input = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,13,19,1,9,19,23,2,13,23,27,2,27,13,31,2,31,10,35,1,6,35,39,1,5,39,43,1,10,43,47,1,5,47,51,1,13,51,55,2,55,9,59,1,6,59,63,1,13,63,67,1,6,67,71,1,71,10,75,2,13,75,79,1,5,79,83,2,83,6,87,1,6,87,91,1,91,13,95,1,95,13,99,2,99,13,103,1,103,5,107,2,107,10,111,1,5,111,115,1,2,115,119,1,119,6,0,99,2,0,14,0];

const EXIT_CODE = 99;
const ADD_CODE = 1;
const MULTIPLY_CODE = 2;
const VALID_OPERATORS = [ADD_CODE, MULTIPLY_CODE];

function process(position, integers) {
  const opCode = integers[position];
  if (opCode === EXIT_CODE) { return integers; }
  else if (!VALID_OPERATORS.includes(opCode)) { throw `${opCode} is not a valid operator`; }

  const operand1position = integers[position + 1];
  const operand2position = integers[position + 2];
  let replaceWith;

  if (opCode === ADD_CODE) {
    replaceWith = integers[operand1position] + integers[operand2position];
  } else {
    replaceWith = integers[operand1position] * integers[operand2position];
  }

  const positionToReplace = integers[position + 3];
  integers[positionToReplace] = replaceWith;

  process(position + 4, integers);

  return integers;
}

const DEFAULT_REPLACEMENTS = {
  1: 12,
  2: 2
};

function main() {
  for (const position in DEFAULT_REPLACEMENTS) {
    input[position] = DEFAULT_REPLACEMENTS[position];
  }

  const resultArray = process(0, [...input]);
  const answer = resultArray[0];
  console.log(answer);
}

main();
