const person = {
  name: "Pratik",
  age: 24,
  salary: 24000,
  info: function () {
    return `name:${this.name},age:${this.age},salary:${this.salary}`;
  },
};

const emp_1 = Object.create(person, {
  name: { value: "sanidhya" },
  age: { value: 22 },
  salary: { value: 850000 },
});

const emp_2 = Object.create(person, {
  name: { value: "radha" },
  age: { value: 30 },
  salary: { value: 150000 },
});

console.log(emp_1.info());
console.log(emp_2.info());
