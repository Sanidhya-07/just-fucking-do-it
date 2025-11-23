const mySet = new Set();

mySet.add("apple");
mySet.add("grapes");
mySet.add("apple");
mySet.add("orange");

console.log(mySet);
console.log(mySet.has("grapes"));

for (let item of mySet) {
  console.log(item);
}

// 1. Create a Set name (letters)
// 2. Add ("a", "b", "c") as properties
// 3. Add ("a", "b", "c") as values
// 4. Iterate over Set & log the values.

const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters);
for (let item of letters) {
  console.log(item);
}
