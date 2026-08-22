function FinsSumofElementInArray (a:number[]) { // {100,200,500,200,600};

    let sum = 0;
    for(let i=0;i<a.length;i++) {
        sum = sum + a[i];
    }
    console.log(sum);
    


}
FinsSumofElementInArray([100,200,500,200,600]);