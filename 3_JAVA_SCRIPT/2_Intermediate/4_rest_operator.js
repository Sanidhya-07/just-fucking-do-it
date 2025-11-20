// Rest operator (for combining parameters)


function person(firstName, lastName, ...hobbies) {
  console.log("FirstName: ", firstName);
  console.log("LastName: ", lastName);
  console.log("Hobbies: ", hobbies);
}
person("sanidhya", "naik", "programming", "cricket", "swimming");


// 1. Create a function name (sum) which takes (unlimited) amount of parameters
// 2. No matter how many parameters you provide it will return the sum value of those params!


function sum(...num){
    console.log(num)
}

sum(1,2,3,4,5,6,9)