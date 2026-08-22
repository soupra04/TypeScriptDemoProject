function plaindrome(strlowe: string) {

    let orgstring: string = strlowe.toLowerCase();

    let strloweorg = strlowe.toLowerCase();

    let rev = strloweorg.split('')
    let left = 0;
    let right = rev.length - 1;

    while (left < right) {
        [rev[left], rev[right]] = [rev[right], rev[left]];
        left++;
        right--;
    }

    let revafter = rev.join('');
    console.log(revafter);
    if(orgstring==revafter){
        console.log("its Plandirme");
    } else {
        console.log("It is not Palindrome");
        
    }


}
plaindrome("Madam");