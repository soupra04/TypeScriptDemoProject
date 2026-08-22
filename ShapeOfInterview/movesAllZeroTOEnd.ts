function movesAllZeroToEndUsingTemp(arr:number[]) {
let arr2:number[] =[];
    for(let i=0;i<arr.length;i++) {
        if(arr[i]!==0) {

            arr2.push(arr[i]);
        }
    }

    while(arr.length >arr2.length) {
        arr2.push(0)
    }

    console.log(arr2);
    

}
movesAllZeroToEndUsingTemp([1,0,3,0,5]);


