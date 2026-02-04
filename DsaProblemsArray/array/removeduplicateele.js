"use strict";
let dup = [1, 2, 4, 2, 3];
let dup1 = [];
for (let i = 0; i < dup.length; i++) {
    if (!dup1.includes(dup[i])) {
        dup1.push(dup[i]);
    }
}
console.log(dup1);
