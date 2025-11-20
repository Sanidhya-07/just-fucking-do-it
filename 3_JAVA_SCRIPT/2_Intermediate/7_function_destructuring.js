const person = {
  name: "sanidhya",
  age: 22,
  city: "pune",
  country: "INDIA",
};

// function Destructuring

function printInfo({ name: userName, age, city: userCity, country }) {
  console.log(`name:${userName}`);
  console.log(`age:${age}`);
  console.log(`city:${userCity}`);
  console.log(`country:${country}`);
}

printInfo(person);
