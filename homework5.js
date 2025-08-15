
var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",

  price: function () {
    let total = 0;
    for (let key in this) {
      if (typeof this[key] === "string") {
        total += parseFloat(this[key]);
      }
    }
    return total;
  },

  minPrice: function () {
    let min = Infinity;
    for (let key in this) {
      if (typeof this[key] === "string") {
        let price = parseFloat(this[key]);
        if (price < min) {
          min = price;
        }
      }
    }
    return min;
  },

  maxPrice: function () {
    let max = 0;
    for (let key in this) {
      if (typeof this[key] === "string") {
        let price = parseFloat(this[key]);
        if (price > max) {
          max = price;
        }
      }
    }
    return max;
  }
};

services["Фарбування"] = "700 грн";
services["Зачіска"] = "1200 грн";
services["Манікюр"] = "800 грн";

console.log(services.price());
console.log(services.minPrice()); 
console.log(services.maxPrice());