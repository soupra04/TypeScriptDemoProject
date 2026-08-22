function verifyPalindrome(a: string) { // cuc

    let reverse: string[] = [];

    for (let i = a.length - 1; i >= 0; i--) {
        reverse.push(a[i]);
    }

    let again: string = reverse.join("");
    console.log(again);

    if (again === a) {
        console.log("palindrome");

    } else {
        console.log("not plaindrome");

    }



}
verifyPalindrome("cuc");