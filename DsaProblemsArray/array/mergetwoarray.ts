let arr5: number[] = [4, 5, 8, 2];
let arr6: number[] = [4, 1, 8, 2,6];

let uniq:number[] = [];

for(let i=0;i<arr5.length;i++) {
    if(!uniq.includes(arr5[i])) {
        uniq.push(arr5[i]);
    }
}

console.log(uniq);

for(let i=0;i<arr6.length;i++) {
    if(!uniq.includes(arr6[i])) {
        uniq.push(arr6[i]);
    }
}

console.log(uniq);

///another way


let mergearray:number[] =[ ...new Set([...arr5,...arr6])];
console.log(mergearray);
