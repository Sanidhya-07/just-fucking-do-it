function Person(fn, ln, pl) {
  (firstName = fn), (lastName = ln), (programmingLanguage = pl);

  this.info = function () {
    console.log(
      `Name:${firstName} ${lastName} Programming Language:${programmingLanguage}`
    );
  };
}

const obj_1 = new Person("sanidhya", "naik", "python");
obj_1.info();
const obj_2 = new Person("prem", "lokte", "golang");
obj_1.info();
const obj_3 = new Person("deepak", "gore", "c++");
obj_1.info();
