function  plaindromeNumber(n:number) {
    let reverse : number[] =[];

   let rev :number = 0;
   let original: number = n;

    while ( n > 0){
        let rem = n % 10;
         rev = rev * 10 + rem;
         n =  Math.floor(n/10);

    }
    console.log(rev);
    
    if(original == rev) {
        console.log("Its palindrome");
        
    } else {
        console.log("its not plaindrome");
        
    }
    

}
plaindromeNumber(121);
