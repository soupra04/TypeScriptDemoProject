let inpt1:number [] = [ 3,2,4,7,10,6,5];


let leftIndex : number = 0;
let rightIndex : number =  inpt1.length-1;
while ( leftIndex <= rightIndex) {
    let temp = inpt1[leftIndex];
    inpt1[leftIndex] = inpt1[rightIndex];
    inpt1[rightIndex] = temp;
    leftIndex++;
    rightIndex--;



}

console.log(inpt1);



