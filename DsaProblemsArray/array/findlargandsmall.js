"use strict";
const lum = [7, 2, 6, 8, 9];
let max5 = lum[0];
//console.log(lum[0]);
for (let i = 0; i < lum.length; i++) {
    if (lum[i] > max5) {
        max5 = lum[i];
    }
}
console.log(max5);
