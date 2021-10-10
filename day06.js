const input = `abc

a
b
c

ab
ac

a
a
a
a

b`;

const grouped = input.split(/\n\n/);
console.log(grouped);
const parsed = grouped.map(group => group.replace(/\n/g, ''));
console.log(parsed);

const total = parsed.reduce((sum, group) => {
  const uniqueLetters = new Set(group);
  return sum + uniqueLetters.size
}, 0);

console.log(total);
