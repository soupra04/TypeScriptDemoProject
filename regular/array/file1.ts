const cars = ["Saab", "Volvo", "BMW"];

console.log(cars.length);
console.log(cars.toString());
console.log(cars.at(1));
console.log(cars.join(" , "));

console.log(cars);
cars.push("hello"); //pop and push
console.log(cars);

cars.shift(); //shift()
console.log(cars);
cars.pop();
console.log(cars);


const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

console.log(myBoys.concat(myGirls).concat(cars)); //concat method

//targetIndex where to paste the copied elements startIndex where to start copying from (default: 0)endIndex where to stop copying (exclusive, default: array length)


console.log(myBoys.copyWithin(2,0,1));

cars.splice(0,1);
console.log(cars);
