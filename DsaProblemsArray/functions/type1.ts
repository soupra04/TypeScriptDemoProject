function printhello(): string {
    return "hello";
  

}
//console.log(printhello());


function multiplication(a: number, b:number) {
    return a * b ;


}
 //console.log(multiplication(2,5));

 function oddEven(a : number)  {

    if(a%2==0) {
        return "a is even";
    } else {
       return "a is odd";
    }



 }

//console.log( oddEven(11));


function reverseNumber(a: number) {

    let rev = 0;
    while(a>0) {
        rev = rev * 10 + a % 10 ; 
        a = Math.floor(a/ 10);



    }
    return rev;

}
//console.log(reverseNumber(123));




