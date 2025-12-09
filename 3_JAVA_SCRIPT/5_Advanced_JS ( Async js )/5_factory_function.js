const factoryFunction = (name, age, salary) => {
  return {
    name: name,
    age: age,
    salary: salary,
    info: function () {
      return `name:${this.name},age:${this.age},salary:${this.salary}`;
    },
  };
};

const emp_1 = factoryFunction("sanidhya", 22, 850000);
// const emp_2 = factoryFunction("prem", 20, 550000);
// const emp_3 = factoryFunction("deepak", 27, 100000);
// const emp_4 = factoryFunction("nandini", 29, 1550000);
// const emp_5 = factoryFunction("pramod", 35, 800000);

console.log(typeof emp_1);
console.log(emp_1.info());
