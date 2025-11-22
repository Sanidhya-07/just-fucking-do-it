// 1. Iterate over "ages" array
// 2. Print only adults, those whos age is greater then 18

const ages = [32, 33, 16, 40];

const adult = ages.filter((age) => {
  return age > 18;
});

console.log(adult);

// 1. Iterate Over "words" array
// 2. Print only those words which length is greater then 6

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const largeWords = words.filter((word) => {
  return word.length > 6;
});
console.log(largeWords);
