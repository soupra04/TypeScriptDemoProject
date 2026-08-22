function fizzBuzz(a: number): string[] {

    let result : string[] =[];

    for (let i = 1; i <= a; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            //console.log("FizzBuzz" );
            result.push("FizzBuzz");

        } else if (i % 3 == 0) {
            result.push("Fizz");

        } else if (i % 5 == 0) {
            result.push("Buzz");

        } else {
             result.push(i.toString());

        }

    }

    return result;

}
console.log(fizzBuzz(15));
