const currentDate = Date();
console.log(currentDate);

let myDate = new Date(2028, 12, 25, 5, 30, 0);
console.log(myDate);

// setInterval

const intervalId = setInterval(function () {
  console.log(
    "This is set interval and it will execute continously after 5 seconds."
  );
}, 5000);

// setTimeout

// setTimeout(function () {
//   console.log("This function will execute after 5 second.");
// }, 5000);

// clearInterval
setTimeout(function () {
  clearInterval(intervalId);
  console.log("Function is stopped");
}, 30000);
