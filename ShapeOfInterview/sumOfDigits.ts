function sumOfDigits(num:number) {
    let sum: number =0;
     
    while( num > 0) {
        let rem = num %10;
        sum = sum+ rem;
        num = Math.floor(num / 10)

    }
    console.log(sum);
    
}
sumOfDigits(123);