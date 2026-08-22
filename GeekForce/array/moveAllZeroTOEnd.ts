function moveAllZeroToEnd(arr: number[]) {

   let j = 0;

   let leftInd = 0;
   let rightInd = arr[arr.length-1];

   for(let i=0;i<arr.length;i++) {
    if(arr[i] !=0) {
        let temp = arr[i] ;
        arr[i] =arr[j];
        arr[j] =temp;
        j++;
    }
   }
   console.log(arr);
   
    


}
//moveAllZeroToEnd([1,2,0,4,3,0,5,0]);

function pushZeroToEnd(arr:number[]) {

let count =0;

for(let i=0;i<arr.length;i++) {
    if(arr[i] !==0) {
        [arr[i],arr[count]] = [arr[count],arr[i]];
        count++;

    }
}
console.log(arr);

}
pushZeroToEnd([1,0,2,0,3,0]);
