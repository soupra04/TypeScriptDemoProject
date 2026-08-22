function typeofArray(arr:number[]) : number{


    let assbrkCount =0; //ascBreak counts how many times the ascending order is broken.
    let descBrkCount = 0;
    let n = arr.length;

    

     for(let i=0;i<arr.length;i++) {
        const next = (i+1) % n;

        if(arr[i]>arr[next]){
            assbrkCount++;
        } 
         if( arr[i]< arr[next]){
            descBrkCount++;
        }

       

     }

     if(assbrkCount==1  && descBrkCount == n-1){
        return 1;
     }
    

    return 0;

}
console.log(typeofArray([5,4,3,2,1]));

