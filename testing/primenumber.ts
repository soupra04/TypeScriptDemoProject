var a: number = 5;
var isPrime: boolean = true;
if (a <= 1) {
    isPrime = false;

} else {
    for (var i = 2; i *i <=a ; i++) {
        if (a % i == 0) {
            isPrime = false;
            break;

        }
    }

}
if (isPrime == false) {
    console.log("number is not prime")
} else {
    console.log("number is  prime")
}