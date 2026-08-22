let na : number []= [1,2,3,4];// 4 1 2 3 , 3412
let d : number = 2;
let k : number = na.length;
const newarr  = new Array(k);

for(let i = 0;i<na.length;i++){
    newarr[(i+d)% k]  = na[i];
}
console.log(newarr);
