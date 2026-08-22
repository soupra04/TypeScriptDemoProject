function firstOneinSortedArray(arr:Number [] ) : number{

   let index = 0;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]==1){
            index = i;
            return index;

        }

    }
    return -1;
}

console.log(firstOneinSortedArray([1,1,1,1]));
