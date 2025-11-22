// for in loop is mostly used to iterate over objects
// It deals with the key only not the values

// Task-1 Iterate over object & log the property and the value of that object using for in loop

const person = {
  name: "sanidhya",
  age: 22,
  city: "Pune",
};

for (let keys in person) {
  console.log(keys, person[keys]);
}

let arr1 = [12, 58, 69, 43, 10];

for (let index in arr1) {
  console.log(index, arr1[index]);
}

// You are given an object representing a student's test scores.
// Each property of the object represents the subject name (e.g., "Math", "Science") and
// the value represents the score.
// Your task is to use the "for...in" loop to calculate and print the average score of the student

const testScores = {
  Math: 92,
  Science: 80,
  History: 88,
  English: 62,
  Geography: 80,
};

let average = function calculateAverageScore(testScores) {
  let totalScores = 0;
  let numsubject = 0;

  for (subject in testScores) {
    totalScores += testScores[subject];
    numsubject++;
  }

  return totalScores / numsubject;
};
console.log("Average test score is : ", average(testScores));
