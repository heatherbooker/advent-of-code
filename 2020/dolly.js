const input = `diobfdyu
ghjjkkk

ghjjudd
jjjko

hgui
hstg`;

console.log('input\n', input);
console.log('input to string\n', input.toString());
console.log('.split()', input.split());
console.log('.split()[0]', input.split()[0]);

const j = input.split('j');
console.log('j', j);

const nn = input.split('\n\n');
console.log('\\n\\n string', nn);

const nn_question = input.split(/\n\n?/);
console.log('\\n\\n? re', nn_question);

const nn_re = input.split(/\n\n/);
console.log('\\n\\n re', nn_re);

const rn = input.split(/\r?\n/);
console.log('\\r?\\n re', rn);
console.log('\\r?\\n re and check length', rn.filter(str => str));

const rnn = input.split(/\r?\n?\n/);
console.log('\\r?\\n?\\n re', rnn);

const rn_star = input.split(/\r*\n*/);
console.log('\\r*\\n* re', rn_star);
