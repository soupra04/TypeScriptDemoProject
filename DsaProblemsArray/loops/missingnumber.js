"use strict";
const arra = [1, 2, 4, 5];
let summ1 = 0;
let summ2 = 0;
for (let i = 0; i <= arra.length - 1; i++) {
    summ1 = summ1 + arra[i];
}
for (let i = 1; i <= 5; i++) {
    summ2 = summ2 + i;
}
let result = summ2 - summ1;
console.log(result);
