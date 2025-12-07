// Public, Private, Protected Example
// Parant Class
class Bank {
  #pin; // private property

  constructor(name, pin, balance) {
    this.name = name; // public
    this.#pin = pin; // private
    this._balance = balance; // protected
  }

  showBalance(pin) {
    if (pin === this.#pin) {
      return this._balance;
    } else {
      return "Incorrect password";
    }
  }
}

// Child class
class Saving extends Bank {
  addInterest(amount) {
    this._balance += amount; // allowed because _balance is protected
  }
}

const acc = new Saving("Sanidhya", 4567, 2000);

console.log(acc.showBalance(4567)); // 2000
acc.addInterest(500);
console.log(acc.showBalance(4567)); // 2100
