const person = {
  firstName: "Sanidhya",
  lastName: "Naik",
  age: 21,
  location: ["ichalkaranji", "pune"],
  id: { adhar: 12041255879, pancard: "CRJTO5879P" },
};
console.log(person);

// 1. Create object name (car)
// 2. add (type, model, color) as properties
// 3. check the type of object
// 4. Update the type property to "Toyota"
// 5. Add new property wheels
// 6. log car to the console.

const car = {
  type: "sedan",
  model: "2025 petrol",
  color: "Black",
};

console.log(typeof car);

car.type = "Toyoto";
car.wheels = 4;

console.log(car);
