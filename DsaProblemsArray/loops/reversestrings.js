"use strict";
const str1 = "Soupra";
let reverse = "";
for (let i = str1.length - 1; i >= 0; i--) {
    reverse += str1.charAt(i);
}
console.log(reverse);
