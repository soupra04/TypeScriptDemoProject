let text = "Hello World!";
let result = text.toString();
let result2 = text.valueOf();
let result3 = text.toWellFormed();
console.log(result3);

let text1 = "Hello";
let text2 = "world!";
let result5 = text1.concat("+", text2);
console.log(result5);

let str = "WelCome to TypeScript";
let str2 = str.split(" ");
console.log(str2);


let hk = "abc";
let abc = hk.split("").reverse().join("");
console.log(abc);

//remove space from string

let result7 = str.replaceAll(" ", "");

console.log(result7);
let result8 = hk.charAt(0).toUpperCase()+hk.substring(1,hk.length);
console.log(result8);



