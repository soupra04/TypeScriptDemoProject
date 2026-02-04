"use strict";
let ary22 = [1, 2, 2, 3, 4, 5, 5];
for (let i = 0; i < ary22.length; i++) {
    let cnt = 0;
    let isVisited = false;
    for (let k = 0; k < i; k++) {
        if (ary22[i] == ary22[k]) {
            isVisited = true;
            break;
        }
    }
    if (isVisited) {
        continue;
    }
    for (let j = 0; j < ary22.length; j++) {
        if (ary22[i] == ary22[j]) {
            cnt++;
        }
    }
    // console.log(cnt + ary2[i]);
    console.log(ary22[i], cnt);
}
