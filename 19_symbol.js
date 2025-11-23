// 1. Create a symbol provide a value of "foo"
// 2. Check the type of that symbol.
// 3. Create empty object
// 4. Store symbol as the property to that object.
// 5. Iterate over Symbol.

const Symbol1 = Symbol("foo");
console.log(typeof Symbol1);

let obj = {};

obj[Symbol("a")] = "a";
console.log(obj);
