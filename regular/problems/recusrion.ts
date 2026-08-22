function recusriiveFibonacci(n: number): number {

    if(n< 2) {
        return n
    }
    return recusriiveFibonacci(n-1) + recusriiveFibonacci(n-2)

}
console.log(recusriiveFibonacci(6));
