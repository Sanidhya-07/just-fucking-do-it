const person1 = {
  fname: "Sanidhya",
  lname: "Naik",

  greet() {
    console.log(`My name is : ${this.fname} ${this.lname}`);
  },
};

person1.greet();

// here we inherit person1 properties in person2 using object.create()
const person2 = Object.create(person1, {
  fname: { value: "prem" },
  lname: { value: "patil" },
});

person2.greet();

const person3 = Object.create(person1, {
  fname: { value: "Deepak" },
  lname: { value: "shah" },
});

person3.greet();

// In this way we can create multiple object by using person1 object as a blueprint.
