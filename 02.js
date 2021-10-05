const initialMemory = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,13,19,1,9,19,23,2,13,23,27,2,27,13,31,2,31,10,35,1,6,35,39,1,5,39,43,1,10,43,47,1,5,47,51,1,13,51,55,2,55,9,59,1,6,59,63,1,13,63,67,1,6,67,71,1,71,10,75,2,13,75,79,1,5,79,83,2,83,6,87,1,6,87,91,1,91,13,95,1,95,13,99,2,99,13,103,1,103,5,107,2,107,10,111,1,5,111,115,1,2,115,119,1,119,6,0,99,2,0,14,0];

const EXIT_CODE = 99;
const ADD_CODE = 1;
const MULTIPLY_CODE = 2;
const VALID_INSTRUCTIONS = [ADD_CODE, MULTIPLY_CODE];

function process(address, integers) {
  const opCode = integers[address];
  if (opCode === EXIT_CODE) { return integers; }
  else if (!VALID_INSTRUCTIONS.includes(opCode)) { throw `${opCode} is not a valid instruction`; }

  const operand1address = integers[address + 1];
  const operand2address = integers[address + 2];
  let replaceWith;

  if (opCode === ADD_CODE) {
    replaceWith = integers[operand1address] + integers[operand2address];
  } else {
    replaceWith = integers[operand1address] * integers[operand2address];
  }

  const addressToReplace = integers[address + 3];
  integers[addressToReplace] = replaceWith;

  process(address + 4, integers);

  return integers;
}

const REQUIRED_OUTPUT = 19690720;

function calculateAnswer(noun, verb) {
  return 100 * noun + verb;
}

const MIN = 0;
const MAX = 99;
const NOUN_ADDRESS = 1;
const VERB_ADDRESS = 2;

function tryInputs() {
  const memory = [...initialMemory];
  for (let noun = MIN; noun <= MAX; noun++) {
    for (let verb = MIN; verb <= MAX; verb++) {
      memory[NOUN_ADDRESS] = noun;
      memory[VERB_ADDRESS] = verb;
      const resultArray = process(0, [...memory]);
      const output = resultArray[0];
      if (output === REQUIRED_OUTPUT) { return calculateAnswer(noun, verb); }
    }
  }
}

function main() {
  const answer = tryInputs();
  console.log(answer);
}

main();
