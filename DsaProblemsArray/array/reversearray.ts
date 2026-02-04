const num5 : number [] = [ 5 , 1 , 4 ,3 ];
let rev5:number[] = [];

// for(let i=num5.length-1;i>=0;i--){
//     rev5.push(num5[i]);

// }
// console.log(rev5);

for(let i= num5.length-1;i>=0;i--) {
    //rev5[i]=num5[i-num5.length]
    rev5[num5.length-1-i] = num5[i];
}
console.log(rev5);