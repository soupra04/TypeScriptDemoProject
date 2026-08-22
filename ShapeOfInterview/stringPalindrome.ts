function stringPalindrome(str: string) {

    let reverse: string[] = [];

    for (let i = str.length - 1; i >= 0; i--) {
        reverse.push(str[i]);


    }

    const reverseWord = reverse.join('');
    console.log(reverseWord);
    if (reverseWord == str) {
        console.log("its palindrome");

    } else {
        console.log("its not");

    }

}
stringPalindrome("aba");