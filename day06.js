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

const total = grouped.reduce((sum, group) => {
  const uniqueLetters = new Set(group.replace(/\n/g, ''));
  return sum + uniqueLetters.size;
}, 0);

console.log(total);
