function  Fibonacci(num:number) {
    let a:number = 0;
    let b:number =1;
    
    for(let i=0;i<num;i++) {

        console.log(a);
        let temp= a+b;
        a=b;
        b=temp;
        

    }
}
Fibonacci(5);