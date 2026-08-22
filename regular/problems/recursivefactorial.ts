function recursivefact(n: number) :any {

    if(n ==0) {
        return 1;
    }


    return n * recursivefact(n-1)
}
console.log(recursivefact(5));
