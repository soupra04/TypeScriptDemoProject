var str:string= "welcome";

let mystring1="welcome to TypeScript";

//charAt();

console.log(mystring1.charAt(5));



//concat

var str2:string = "welcome";
var str3:string = " to Type Script";
console.log(str2.concat(str3));
console.log(str2.concat(str3).concat(str2));

//replace()

var str = "TypeScript programme";
console.log(str.replace('i','X'));


//split()

var fruits:string = "Apple Bananan orange";
console.log(fruits.split(' '));
console.log(fruits.split(' ',2));

var strname = "welcome";
console.log(strname.substring(0,3));