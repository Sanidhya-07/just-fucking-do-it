// 1. Create variable name (firstFavNumb) & store your favorite number.
// 2. Create variable name (secondFavNumb) & store second fav Number.
// 3. Check (firstFavNumb is greater then secondFavNumb)
// 4. Check (firstFavNumb is less then secondFavNumb)
// 5. Check (firstFavNumb is greater then & equal to secondFavNumb)
// 6. Check (firstFavNumb is less then & equal to secondFavNumb)
// 7. Check (firstFavNumb is equal to secondFavNumb) using strict equality operator.
// 8. Check (firstFavNumb is equal to secondFavNumb) using loose equality operator.
// 9. Check (firstFavNumb is not equal to secondFavNumb) using strict non-equality operator.
// 10. Check is (firstFavNumb is not equal to secondFavNumb) using loose non-equality operator.

let firstFavNumb = 10;
let secondFavNumb = "10";

console.log("Greater than : ", firstFavNumb > secondFavNumb);
console.log("Less than", firstFavNumb < secondFavNumb);
console.log("Greater than equal to : ", firstFavNumb >= secondFavNumb);
console.log("Less than equal to : ", firstFavNumb <= secondFavNumb);

console.log("loose equality : ", firstFavNumb == secondFavNumb); //loose equality
console.log("strict equality : ", firstFavNumb === secondFavNumb); //strict equality

console.log("loose not equality : ", firstFavNumb != secondFavNumb); //loose not equality
console.log("strict not equality ", firstFavNumb !== secondFavNumb); //strict not equality
