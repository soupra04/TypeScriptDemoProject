function sortAnArray(arr: number[]): number[] {
    return arr.sort((a, b) => a - b);       
}

//console.log(sortAnArray([5,2,1,8,3]));

function bubbleSort(arr:number[]) {
    
   
   for(let i=0;i<arr.length;i++){
    let swapped = false;
    for(let j=0;j<arr.length;j++) {
        if(arr[i]<arr[j]) {
            [arr[i],arr[j]] =[arr[j],arr[i]];
            swapped= true;
        }
    }
    if(!swapped) {
        break;
    }

   }
   console.log(arr);
   
    
}
bubbleSort([5,2,1,8,3]);