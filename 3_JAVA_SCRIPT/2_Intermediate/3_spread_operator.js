// // 1 - spread operator for function

// function giveMe4(A,B,C,D){
//     console.log("A",A)
//     console.log("B",B)
//     console.log("C",C)
//     console.log("D",D)
// }
// // giveMe4(1,2,3,4)

// colors=["red","green","blue","pink"]
// // giveMe4(colors)
// giveMe4(...colors)          //spread operator



// // 2 - spread operator for Arrays (Create shallow copies)

// const arr1=[1,2,3,4]
// const arr2=[50,70,80,10]
// const finalArray=[...arr1,...arr2,"sanidhya","deepak"]

// console.log(arr2)
// console.log(finalArray)



// // 3 - spread operator for Objects (Create shallow copies)

// const obj1={x:1,y:2}
// const obj2={z:3}
// const finalObj={...obj1,...obj2,name:"sanidhya",age:21}


// console.log(obj1)
// console.log(finalObj)



//           --- Task ---
// 1. Make a clone of "arr101, arr201" by using spread operator
// 2. Make a clone of "user" object using spread operator

let arr101 = [1, 2, 3];
let arr201 = [4, 5];

const clone=[...arr101,...arr201]
console.log(clone)


const user = {
  name: "Jen",
  age: 22,
};

const userClone={...user}
console.log(userClone)


