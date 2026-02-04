"use strict";
// for(let i=0;i<=5;i++) {
//     ary2[i] = i;
// }
// console.log(ary2);
// console.log(ary2.join(''));
// let st5: string = "Soupra";
// let ary2: any[] = st5.split('');
// console.log(ary2);
// for( let e of ary2) {
//     if(e==4) {
//         continue;
//     } else {
//         console.log(e);
//     }
// }
// let ary3:number [ ]= [];
// let nm:number = ary2.length-1;
// let jn : number = 0;
// for(let i =nm;i>=0;i--) {
//     ary3[jn] =ary2[i];
//     jn++;
// }
// console.log(ary3);
let ary2 = [1, 2, 2, 3, 4, 5, 5];
for (let i = 0; i < ary2.length; i++) {
    let cnt = 0;
    let isVisited = false;
    for (let k = 0; k < i; k++) {
        if (ary2[i] == ary2[k]) {
            isVisited = true;
            break;
        }
    }
    if (isVisited) {
        continue;
    }
    for (let j = 0; j < ary2.length; j++) {
        if (ary2[i] == ary2[j]) {
            cnt++;
        }
    }
    // console.log(cnt + ary2[i]);
    console.log(ary2[i], cnt);
}
