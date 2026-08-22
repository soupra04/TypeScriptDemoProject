let arr1 : number [] = [ 1,2,2,3,4,5,1];
let arr : number [] = [];

for(let i=0;i<arr1.length-1;i++){
    if(!arr.includes(arr1[i])){
        arr.push(arr1[i]);
    }
   


}
console.log(arr);


