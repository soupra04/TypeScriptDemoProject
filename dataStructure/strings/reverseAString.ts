function reverseAString(a:string) { // welcome to javascript

    let aString = a.trim().split(" ");

    let rev:string[] = [];

    for(let i=aString.length-1;i>=0;i--) {

        rev[aString.length-1-i] = aString[i];
    }
    console.log(rev);
    

}
reverseAString("welcome to typeScript");