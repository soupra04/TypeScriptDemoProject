function errorhandling(a: number , b : number) {
    if( a !=0 && b != 0)  {
        return a * b ;
    } else {
        throw new Error(" number is not valid");
    }

}
console.log(errorhandling(0 , 2));