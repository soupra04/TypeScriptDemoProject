// const arra:number[] = [-5,2,10,4,6];
// let trz : number;


 function binarySearch(arrg : number[], tr:number)  {


let leftIndex : number = 0;
let rightIndex:number = arrg.length-1;

while(leftIndex <=rightIndex) {

    let midIndex = Math.floor((leftIndex + rightIndex) / 2);

    if(tr ==arrg[midIndex]){
        return midIndex;

    }

    if(tr < arrg[midIndex]){
        rightIndex = midIndex -1;
    } else {
        leftIndex = midIndex +1;
    }
}
return -1;

 }

 console.log(binarySearch([-5,2,4,6,10],40));
 
 