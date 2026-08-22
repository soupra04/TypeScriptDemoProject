function checkPalindrome(num : number) { //121

     let reverse : number =0;
     let org = num;
    if(num < 0 ){
        console.log("its invalid number");
        
    } else 
        {
        while (num>0) {

            let rem = num % 10;
            reverse = reverse*10 + rem;
            num = Math.floor(num / 10);


        }
    }
    console.log(reverse);
    if(org == reverse) {
        console.log("its palindrome");
        
    } else  {
        console.log("its not palindrome");
    }



}
checkPalindrome(121);