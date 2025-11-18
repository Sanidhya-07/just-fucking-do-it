// first example

function greet(name, cb) {
  console.log(`hello ${name}`);
  cb();
}

// function callback() {
//   console.log("Hii, I am callback function.");
// }

// greet("sanidhya", callback);

greet("sunny", function callback() {
  console.log("Hii, I am callback function.");
});

// Second example

function add(x, y, fn) {
  let c = x + y;
  console.log("Addition is: ", c);
  fn(c);
}

add(3, 4, function (c) {
  console.log("Power of 2 is: ", c ** 2);
});

//  --- Task ---

// 1. Create a function name (showCallFunc)
// 2. pass "fn" as parameter
// 3. inside that function, create variable which holds value of 10
// 4. pass that value to the callback function
// 5. Now create callback function & print that value which you pass as parameter to the callback func.

function showCallFunc(fn) {
  const value = 10;
  fn(value);
}

showCallFunc(function (value) {
  console.log(value);
});
