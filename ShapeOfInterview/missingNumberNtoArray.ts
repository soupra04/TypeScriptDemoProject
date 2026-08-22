function missingNumber(a:number[],n:number){
let sum1 : number =0;
    for( let e of a) {

        sum1 = sum1 + e;
    }
let sum2:number = 0;

for(let i=1;i<=n;i++){
    sum2+=i;
}

let result = sum2-sum1;
console.log(result);


}
missingNumber([1,2,3,5],5)