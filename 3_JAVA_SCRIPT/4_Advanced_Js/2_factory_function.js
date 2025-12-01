// If a function return object and also create object then it is called factory function.

// create a factory function that generates different types of vehicles.
// Each vehicle object should have properties like type, brand, model, and year.

function vehicle(type, brand, model, year) {
  return {
    Type: type,
    Brand: brand,
    Model: model,
    Year: year,

    Carinfo: function () {
      return `My car Type is:${this.Type}\nMy car Brand is:${this.Brand}\nMy car Model is:${this.Model}\nMy car Year is:${this.Year}\n`;
    },
  };
}

const sunny = vehicle("Sedan", "Maruti", "SX", 2020);
console.log(sunny.Carinfo());

const prem = vehicle("hashback", "Toyoto", "top-model", 2023);
console.log(prem.Carinfo());
