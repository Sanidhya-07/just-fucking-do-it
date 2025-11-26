// console.log(window);
// console.log(window === this);

//  1.....this alone
console.log(this);


//  2.....this inside function
function greeting() {
  return this;
}
res1 = greeting();
console.log(res1);


//  3.....this inside object
person = {
  firstName: "sanidhya",
  lastName: "naik",

  //   it is normal function
  //   greet: function () {
  //     console.log(this);
  //     return `${this.firstName} ${this.lastName}`;
  //   },

  //it is arrow function
  greet: () => {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
};
res2 = person.greet();
console.log(res2);
