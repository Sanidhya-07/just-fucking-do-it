// 1. Create array with random numbers.
// 2. Map over each item in that array, & multiply each item by 10

// map helper create new array unlike foreach helper(both iterate over each and every element)

let arrNum = [2, 5, 7, 6, 4];

let newArrNum = arrNum.map((item) => {
  return item * 10;
});

console.log(arrNum);
console.log(newArrNum);
