// Object destructuring..... 1

const person = {
  name: "sanidhya",
  age: 22,
  gender: "Male",
  country: "India",
};

const { name, age, country } = person;
console.log(name);
console.log(age);
console.log(country);

// how to change variable name ( key name ) in object..... 2

const num = { x: 100, y: 300 };
// const{x,y}=num
const { x: newName1, y: newName2 } = num;
console.log(newName1);
console.log(newName2);

// object destructuring with rest operator..... 3

const { a, b, ...rest } = { a: 10, b: 55, grapes: 20, oranges: 94, lemon: 13 };
console.log(rest);


const{name:personName, age:personAge, country:personCountry} = person
console.log(personName)
console.log(personCountry)
console.log(personAge)