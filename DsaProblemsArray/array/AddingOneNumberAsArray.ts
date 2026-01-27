const num: number[] = [ 9,9,9];

let sum = 0;
let mul = 1;

for(let i=num.length-1;i>=0;i--){

    sum = sum + num[i] * mul;
    mul =mul * 10;  
}
console.log(sum+1);
