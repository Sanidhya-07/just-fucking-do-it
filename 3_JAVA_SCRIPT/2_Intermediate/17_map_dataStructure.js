//It is NOT necessary to assign a function as a value just because the key is a function.
//You can assign any value to any key, regardless of type.

const myMap = new Map();

let keyOne = "name";
let keyTwo = [];
let keyThree = {};

myMap.set(keyOne, "sanidhya");
myMap.set(keyTwo, [20, 54, 69]);
myMap.set(keyThree, { age: 12, country: "India", state: "Maharashtra" });
myMap.set(function keyFour() {}, "this is a func value and it is string.");

console.log(myMap);

// 1) To iterate over keys ->

// for(let key of myMap.keys()){
//     console.log(key)
// }

// 2) To iterate over Values ->

// for (let value of myMap.values()) {
//   console.log(value);
// }

// 3) To iterate over key/Values ->

for (let [key, value] of myMap) {
  console.log(`${key} -- ${value}`);
}
