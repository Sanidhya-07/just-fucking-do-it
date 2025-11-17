let firstName = "Sanidhya";
let lastName = "Naik";

// let fullName = firstName + " " + lastName;
// console.log(fullName);

// 1- Concatination
let fullName = firstName.concat(lastName);
console.log(fullName);

// 2- Append ( += )
firstName = firstName += " is a programmer.";
console.log(firstName);

// 3- Length
console.log(firstName.length);

// 4- Cases
console.log(lastName.toLowerCase());
console.log(lastName.toUpperCase());

// 5- Slice
console.log(fullName.slice(0, 10));

// 6- Include
console.log(firstName.includes("Sanidhya"));

// 7- Split and Join
console.log(fullName.split(""));
console.log(fullName.split("").join("-"));

// 8- Trim
let remark = "        good        ";
console.log(remark.trim());

//          --- TASK ---

// 1. Create variable name (favActorFirstName) & store your fav Actor name.
// 2. Create variable name (favActorLastName) & store the last name of (FA).
// 3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName)
// 4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
// 5. Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be in UPPERCASE.
// 6. Now append this message to the (message variable) `his best show is Silicon Valley`.
// 7. Now Log your Message.

let favActorFirstName = "Pankaj ";
let favActorLastName = "Tripathi";

let actorFullName = favActorFirstName.concat(favActorLastName);
console.log("Full Name : ", actorFullName);

let uppercase = favActorFirstName.toUpperCase();
let lowercase = favActorFirstName.toLowerCase();
console.log(uppercase);
console.log(lowercase);

let message = `My favorite Actor is ${actorFullName.toUpperCase()}.`;
console.log((message += "His best show is Criminal Justice."));
