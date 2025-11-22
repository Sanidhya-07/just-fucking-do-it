let words = ["sanidhya", "prem", "deepak", "digu", "tushar"];

words.forEach((words, index, arr) => {
  arr[index] = words[0].toLocaleUpperCase() + words.substring(1);
});
console.log(words);

// 1. Create an array of numbers.
// 2. Create a variable to hold the sum.
// 3. Create the adder function which takes the parameter of number & add that with sum variable.
// 4. Loop over the array, incrementing the sum variable except this time a function gets referenced in the forEach
// 5. print the sum variable.

let numbers = [10, 25, 48, 96];

let sum = 0;

// function adder(number) {
//   sum += number;
// }
// numbers.forEach(adder);

numbers.forEach((number) => {
  sum += number;
});

console.log(`Addition is ${sum}`);
