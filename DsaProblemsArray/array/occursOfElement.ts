function occursOfElement(arr:number[]) {

   
  
    for(let i=0;i<arr.length-1;i++) {
        let count=1;
        let isVisited : boolean = false;

        for(let k=0;k<i;k++){
            if(arr[i]==arr[k]) {
                isVisited=true;
                break;
            }
        }
        if(isVisited==true) {
            continue;
        }
        for(let j=i+1;j<arr.length;j++) {
            if(arr[i]==arr[j]){
                count++;
                

            }
        }
        if(count%2==0) {
            console.log("the count of" + arr[i] + " == " + count);
        }
    }

    
  
    
}
occursOfElement([9, 12, 23, 10, 12, 12, 15, 23, 14, 12, 15]);
