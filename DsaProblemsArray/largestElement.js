"use strict";
const num = [5, 1, 4, 3];
var max = num[0];
var min = num[0];
for (var i = 1; i < num.length; i++) {
    if (num[i] > max) {
        max = num[i];
    }
    if (num[i] < min) {
        min = num[i];
    }
}
console.log(max);
console.log(min);
