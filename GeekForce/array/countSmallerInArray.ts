function countSmallerThanArray(arr:number[],k:number){

    let count=0;
    for(let e of arr){

        if(e<=k){
            count++;
        }

    }
    console.log(count);
    
}
countSmallerThanArray([10, 1, 2, 8, 4, 5],9);