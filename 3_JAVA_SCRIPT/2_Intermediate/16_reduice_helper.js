// Write a function called calculateProduct that takes an array of numbers as an argument
// and returns the product of all the numbers in the array.

// Write the calculateProduct function using the reduce() method to achieve this task.

const numbers = [2, 3, 4, 5];

// let calculateProduct = numbers.reduce((pre, curr) => {
//   return pre * curr;
// }, 1);

// console.log(calculateProduct);

function calculateProduct(numberArr) {
  //   return numberArr.reduce((pre, curr) => pre * curr);

  return numberArr.reduce((pre, curr) => {
    return pre * curr;
  });
}

const product = calculateProduct(numbers);
console.log(product);
