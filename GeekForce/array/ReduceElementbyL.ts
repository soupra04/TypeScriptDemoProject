function reduceElementByk(arr:number[],k:number){

    let count=0;
    for(let i=0;i<arr.length;i++) {
        if(arr[i]<=k) {
            continue;

        } else 
            while(arr[i]>k){
            arr[i] = arr[i]-k;
            count++;
        }

    }
    console.log("operation count" + count);
    

}
reduceElementByk([2, 6, 4, 8, 1, 6], 4);