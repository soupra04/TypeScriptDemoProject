"use strict";
const ab = "Hellho";
var abd = ab.split('');
//1 2 3 4
// 0 1 2 3
let map = {};
for (const ch of ab) {
    if (map[ch]) {
        map[ch]++;
    }
    else {
        map[ch] = 1;
    }
}
console.log(map);
