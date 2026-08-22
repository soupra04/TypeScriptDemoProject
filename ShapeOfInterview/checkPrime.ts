function prime(num : number) {

    if(num<2){
        "its not prime"
    } else {
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i==0) {
                console.log("its not prime");
                
            } else {
                console.log("its prime");
            }
        }
    }
}
prime(50);
