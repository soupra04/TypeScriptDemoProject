"use strict";
const dup3 = [1, 2, 3, 5, 3, 2];
let unique = [];
for (let i = 0; i < dup3.length; i++) {
    if (unique.includes(dup3[i])) {
        unique.push(dup3[i]);
    }
}
console.log(unique);
