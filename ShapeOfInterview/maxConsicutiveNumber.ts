function maxConsicutive(arr:number[]) {

     let count=1;
     let max = 1;

    for(let i=1;i<arr.length;i++) {
       
        if(arr[i]==arr[i-1]){
            count++;
        } else {
            count =1;
        }
        if(count > max) {
            max= count;
        }
    }
    console.log(max);
    
    
    
}
maxConsicutive([1,1,0,1,1,1]);