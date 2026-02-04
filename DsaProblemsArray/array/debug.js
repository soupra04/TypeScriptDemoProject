"use strict";
const arr1 = [10, 20, 30, 50, 60, 70];
const arr2 = ["GSB-00000", "GSB-00000", "GSB-00000", "GSB-00001", "GSB-00001", "GSB-00001"];
for (let i = 1; i < arr1.length; i++) {
    const diff = arr1[i] - arr1[i - 1];
    const gsb = arr2[i] == arr2[i - 1]; //true
    if (!gsb) {
        if (diff == 20) {
            console.log("gsb is not same therefore diff is 20");
        }
        else if (diff == 10) {
            throw new Error("gsb is  chnaged but  diff is 10");
        }
        else {
            throw new Error("mismatched");
        }
    }
    else {
        if (diff != 10) {
            throw new Error("gsb is same but diff is not 10");
        }
        else {
            console.log("gsb is same and diff is 10");
        }
    }
}
