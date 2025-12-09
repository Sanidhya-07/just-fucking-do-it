const person1 = {
  name: "Pratik",
  age: 24,
  //   its __proto__ points to "prototype" of object base class
};

const person2 = Object.create(person1); //its "__proto__" points to "person1"
const person3 = Object.create(person1); //its "__proto__" points to "person1"

// but we can change it
person3.__proto__ = null;
person3.salary = 250000;
console.log(person3.age);
console.log(person3.salary);
