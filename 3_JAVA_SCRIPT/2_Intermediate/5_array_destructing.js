// Array destructing .....1

const foo = ["Banana", "Grapes", "mango"];

const [firstElement, secondElement, thirdElement, fourthElement] = foo;

console.log(firstElement);
console.log(secondElement);
console.log(thirdElement);
console.log(fourthElement);

// 1...
function f() {
  return [10, 20, 30];
}

// let [firstElement,secondElement,thirdElement]=f()
// console.log(firstElement)
// console.log(secondElement)
// console.log(thirdElement)

//2
let [A, , B] = f(); // to skip one element
console.log(A);
console.log(B);

//3
function fun() {
  return ["sanidhya", "deepak", "sid", "teju", "prem"];
}

const [Younger, ...cousions] = fun();
console.log(Younger);
console.log(cousions);
