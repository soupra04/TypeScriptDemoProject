"use strict";
class Car {
    //brand: string;
    // manf: number;
    // name: string;
    brand = "TATA";
    manf = 2024;
    name = "Nexon";
    driver() {
        console.log("this is my first car");
    }
}
const mycar1 = new Car();
mycar1.driver();
const mycar2 = new Car();
mycar2.driver(); //this is using same properties if I dont use constrcutor
