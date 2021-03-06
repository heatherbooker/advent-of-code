const masses = [
85644,
52584,
72349,
83834,
56593,
108492,
94585,
97733,
62732,
103113,
133259,
132647,
52460,
51299,
115749,
121047,
69451,
54737,
62738,
116686,
57293,
97273,
128287,
139440,
97583,
130263,
79307,
118198,
82514,
70679,
64485,
119346,
136281,
114724,
73580,
76314,
126198,
97635,
114655,
104195,
99469,
70251,
82815,
79531,
58135,
80625,
73106,
139806,
138478,
136605,
111472,
149915,
95928,
126905,
70496,
147999,
148501,
114025,
75716,
113473,
95390,
104466,
138715,
53053,
79502,
98601,
115139,
122315,
88402,
124332,
140107,
50912,
104885,
142005,
145938,
118556,
101858,
51142,
94100,
99421,
84544,
137234,
126374,
107333,
82439,
125373,
51212,
99358,
82821,
89913,
67513,
136907,
133707,
139988,
96914,
130672,
66474,
120729,
50131,
67475
];

function fuelRequired(mass) {
  const dividedBy3 = mass / 3;
  const roundedDown = Math.floor(dividedBy3);
  const subtracted2 = roundedDown - 2;
  return Math.max(subtracted2, 0);
}

const totalFuelRequired = masses.reduce((sum, nextMass) => {
  let fuelForMass = fuelRequired(nextMass);
  sum += fuelForMass;
  while (fuelForMass > 0) {
    fuelForMass = fuelRequired(fuelForMass);
    sum += fuelForMass;
  }
  return sum;
}, 0);

console.log(totalFuelRequired);


// 4,967,194 is too high
// 4,964,250 is too low
