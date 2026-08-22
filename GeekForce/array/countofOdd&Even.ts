function sumofDistinctEle(arr:number[]): number[]{
    let countOdd =0;
    let countEven =0;

    for(let e of arr) {
        if(e % 2 ==0) {
            countEven++;
        } else if(e %2 !=0) {
            countOdd++;
        } else {
            console.log("ignore");
            
        }
    }



    return [countOdd,countEven];



}
console.log(sumofDistinctEle([1,1]));
