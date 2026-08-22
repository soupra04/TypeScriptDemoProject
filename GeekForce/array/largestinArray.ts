function largestinArray(arr:number[]){

    let max = arr[0];
    for(let e of arr) {
        if(e > max) {
            max = e;
        }

    }
    console.log(max);
    
}
largestinArray([10]);