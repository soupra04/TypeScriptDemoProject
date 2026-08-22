function countofDigit(num:number) {

    let rem: number;
    let count : number =0;
 
    while(num>0) {

        rem = num % 10;
        count++;
        num = Math.floor(num / 10);
    }
    console.log(count);
    
}
countofDigit(1234.5);