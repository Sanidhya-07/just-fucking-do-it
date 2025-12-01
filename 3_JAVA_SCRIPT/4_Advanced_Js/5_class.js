// class declaration
class Person {
  constructor(fname, lname, age) {
    // instance members
    this.fname = fname;
    this.lname = lname;
    this.age = age;

    // instance method  --> every object get its seperate copy of personinfo()
    this.Personinfo = function () {
      return `My name is : ${this.fname} ${this.lname} and I am ${this.age} year old.`;
    };
  }

  //   prototype method  --> best
  greet() {
    return `Hello there ${this.fname} ${this.lname}`;
  }
}

const p1 = new Person("sanidhya", "Naik", 22);
console.log(p1.Personinfo());
console.log(p1.greet());
