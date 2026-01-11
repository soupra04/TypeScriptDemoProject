"use strict";
const num = [5, 1, 4, 3, 6];
var isSorted = true;
for (var i = 0; i < num.length - 1; i++) {
    if (num[i] > num[i + 1]) {
        isSorted = false;
        break;
    }
}
if (isSorted == true) {
    console.log("array is sorted");
}
else {
    console.log("arrya is not sorted ");
}
