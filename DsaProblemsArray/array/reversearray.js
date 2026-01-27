"use strict";
const num = [5, 1, 4, 3];
const rever = [];
for (var i = num.length - 1; i >= 0; i--) {
    rever[num.length - 1 - i] = num[i];
}
console.log(rever);
