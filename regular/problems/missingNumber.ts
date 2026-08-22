let newarr : number [] =  [1,2,4,5,6];

let sum1:number =  0;
let sum2:number= 0;

for(let i=0;i<newarr.length;i++) {
    sum1 = sum1 + newarr[i];
}
console.log("sum1" + " ==" + sum1);

for (let i =1;i<=6;i++) {
    sum2 += i;
}

console.log("sum2" + " ==" + sum2);
let result = sum2 - sum1;
console.log("Missing Number is "+ " ==" + result);


