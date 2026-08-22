function missingNumberInArray(a:number[]) {  //   1 2 3 5
    
    let sum1 = 0;
    for(let i=0;i<a.length;i++) {
        sum1 = sum1 + a[i];
    }
    console.log(sum1);

    let sum2 = 0;
    for(let j=1;j<=5;j++) {
        sum2 = sum2 + j;
    }
    console.log(sum2);

    let diff =  sum2 - sum1;
     console.log(diff);
    

}
missingNumberInArray([1,2,3,5]);