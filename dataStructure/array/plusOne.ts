function plusOne(a:number[]) {


    let mul=1;
    let sum=0;
    for(let i=a.length-1;i>=0;i--){
        sum = sum + mul * a[i];
        mul = mul * 10;
    }

    let res = sum+1;
    console.log(res);
    let arr = Array.from(String(res),Number);
    console.log(arr);
    
    
    

}
plusOne([1,2,3]);