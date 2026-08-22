function FirstAndLastElementofArrayList (a:number[]) {

        

    // console.log(a[a.length-1]);
    // console.log(a.at(a.length-1));
    
    for(let i=a.length-1;i>=0;i++) {
        if (i==a.length-1) {
            console.log("found the last element" + a[i]);
            break;
            

        }
    }


}
FirstAndLastElementofArrayList([100,200,500,200,600]);
