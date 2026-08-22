function stringPalindrome(str:string) {

    // let rev:string[] =[];

    // for(let i=str.length-1;i>=0;i--){
    //     rev[str.length-1-i] = str[i];

    // }
    // console.log(rev.join(""));
    

    let leftIn:number = 0;
    let rightIn:number = str.length-1;
    while(leftIn<rightIn) {
        
        if(str[leftIn] != str[rightIn]) {
            return false;
        }
        leftIn ++;
        rightIn--;

    }

    return true;


}
stringPalindrome("soupra")