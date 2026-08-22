function sum(n:number){

    let sum:number = 0;

    for(let i=0;i<=n;i++){
        sum += i;
    }
    return sum;

}
console.log(sum(5)); // 1 2 3 4 5
