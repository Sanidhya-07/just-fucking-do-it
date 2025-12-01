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

// Inheritance

class Programmer extends Person {
  constructor(fname, lname, age, prog_lang, experience) {
    super(fname, lname, age);
    this.prog_lang = prog_lang;
    this.experience = experience;
  }

  coder() {
    return ` i am a coder in ${this.prog_lang} language.`;
  }
}

// Person class object
const p1 = new Person("sanidhya", "Naik", 22);
console.log(p1.Personinfo());
console.log(p1.greet());

// Programmer class object
const c1 = new Programmer("Prem", "Patil", 36, "Python", 10);

console.log(c1.coder());
console.log(c1.greet());
