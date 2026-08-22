function secondLargestArray(arr:number[]) : number {

let max : number = arr[0];
let secondMax : number =-1

for(let i=1;i<arr.length;i++) {
    if(arr[i]>max) {
       secondMax = max;
       max=arr[i];
    } else if(arr[i]< max && arr[i] > secondMax ){
        secondMax =arr[i];
        
    }

}

   return secondMax; 
}

console.log(secondLargestArray([12, 35, 1, 10, 34, 1]));
