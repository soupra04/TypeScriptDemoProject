function GCD(a:number,b:number){

    let orga:number = a;
    let orgb:number = b;
    let rem:number;
    while(b>0){
         rem = a%b;
        a=b;
        b=rem;
    }
    
    console.log(a);

    console.log("LCM of these two numbers are : "+ (orga*orgb)/a);
}

(GCD(12,18));
