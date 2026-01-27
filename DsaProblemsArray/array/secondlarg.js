"use strict";
const num = [5, 1, 4, 3];
let larg = Infinity;
let sclarg = Infinity;
for (var i = 0; i < num.length; i++) {
    if (num[i] > larg) {
        sclarg = larg;
        larg = num[i];
    }
    else if (num[i] < larg && num[i] > sclarg) {
        sclarg = num[i];
    }
}
console.log(larg);
console.log(sclarg);
