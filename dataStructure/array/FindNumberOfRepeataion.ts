function FindNumberOfRepeataion (a:number[]) { // {100,200,500,200,600};

    //let count = 0;

    for(let i=0;i<a.length-1;i++) {
         let count = 0;
        for(let j=i+1;j<=a.length-1;j++){
            if(a[i]==a[j]){
                count++;
            }
        }
        console.log(count ,a[i]);
        
    }
    

}
FindNumberOfRepeataion([100,200,500,200,600]);