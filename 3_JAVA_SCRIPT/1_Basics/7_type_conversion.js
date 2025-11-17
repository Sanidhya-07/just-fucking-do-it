let money = "50";
console.log(money, typeof money);

// 1-
// money = parseFloat(money);       //1
// money = Number(money);           //2
money = +money; //3
console.log(money, typeof money);

// 2-
let cash = 1000;
console.log(cash, typeof cash);

// 3-
cash = cash.toString();
console.log(cash, typeof cash);
