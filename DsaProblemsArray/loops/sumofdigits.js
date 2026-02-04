"use strict";
let nu = 123;
let sum5 = 0;
while (nu > 0) {
    let num2 = nu % 10; // 3 2 1
    sum5 = sum5 + num2;
    nu = Math.floor(nu / 10); // 12
}
console.log(sum5);
