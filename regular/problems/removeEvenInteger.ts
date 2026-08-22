let inpt:number [] = [ 3,2,4,7,10,6,5];

let newarr:number[] = [];

// for(let i=0;i<inpt.length;i++) {
//     if(inpt[i]%2!==0) {
//         newarr.push(inpt[i]);

//     }
// }


for(let i=inpt.length-1;i>0;i--){
    if(inpt[i]%2==0) {
        inpt.splice(i,1);
    }
}

// console.log(newarr);
console.log(inpt);
