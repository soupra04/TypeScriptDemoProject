"use strict";
let nam = "Soupra";
let name2 = nam.toLowerCase();
let namearr = name2.split('');
let rev = [];
console.log(namearr);
for (let i = namearr.length - 1; i >= 0; i--) {
    //rev[namearr.length-1-i] = namearr[i];
    rev.push(namearr[i]);
}
console.log(rev);
console.log(rev.join(''));
