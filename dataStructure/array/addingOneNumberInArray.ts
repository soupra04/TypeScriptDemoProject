//let a = [9, 9, 9];

function AddingOneNumberInArray(a : number []){



let sum = 0;
let mul = 1;
for(let i=0;i<a.length;i++) {
    sum = sum + mul * a[i];  // 1* 9 ,  10*9 ; 100 *9 
    mul = mul * 10;


}
console.log(sum+1);
}
AddingOneNumberInArray([9, 9, 9]);
