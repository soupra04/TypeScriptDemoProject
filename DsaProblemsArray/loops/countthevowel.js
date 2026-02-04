"use strict";
// const str6 : string ="sOupra";
// const str5 : string =str6.toLowerCase();
let str5 = "SouprA";
str5 = str5.toLowerCase();
let vc = 0;
for (let i = 0; i < str5.length; i++) {
    if (str5.charAt(i) == "a" || str5.charAt(i) == "e" || str5.charAt(i) == "i" || str5.charAt(i) == "o" || str5.charAt(i) == "u") {
        vc++;
    }
}
console.log("the count of vowel is " + " " + vc);
