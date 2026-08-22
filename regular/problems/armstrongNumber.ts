function armstrongNumber(n:number) {

    let sum =0;
    let original: number = n;
    let digit : number = n.toString().length;

    while(n>0) {
        let rem = n % 10;
        sum = sum + Math.pow(rem,digit)
        n = Math.floor(n/10);

    }
    console.log(sum);
    if(original == sum) {
        console.log("Its armstrong");
        
    } else {
        console.log("its not armstrong");
        
    }
 
}
armstrongNumber(16324);