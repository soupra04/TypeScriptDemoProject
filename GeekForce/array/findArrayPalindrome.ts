function findArrayisPalindorme(arr: number[]): boolean {

    function isPalindrome(num: number): boolean {

        
       let org = num;
        let revers = 0;
        let rem = 0;
        while (num > 0) {
            rem = num % 10;
            revers = revers * 10 + rem;
            num = Math.floor(num / 10);
        }
        if (org != revers) {
            return false;
        
    }
    return true;




}

for (let i = 0; i < arr.length; i++) {
    if(!isPalindrome(arr[i])){
        return false;
    }

    

}
return true;


}

console.log(findArrayisPalindorme([121, 131, 20]));
