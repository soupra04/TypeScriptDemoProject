"use strict";
class Car {
    brand;
    manf;
    model;
    constructor(brand, manf, model) {
        this.brand = brand;
        this.manf = manf;
        this.model = model;
    }
    driver() {
        console.log("this" + this.brand + this.model + "is my first car and manufactured in " + this.manf);
    }
}
const myCar = new Car("TATA", 2024, "NEXON");
myCar.driver();
const myCar2 = new Car("MARUIT", 2010, "ALTO");
myCar2.driver();
