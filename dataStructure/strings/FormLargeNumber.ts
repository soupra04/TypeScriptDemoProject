function FormLargeNumber(a:number[]){

    
    let b = a.map(String);

    b.sort((x,y) => {

        let xy = x+y;
        let yx=y+x;


        return yx.localeCompare(xy);


    })

    let c =b.join("");
    console.log(c);
    
    
    

    


}
FormLargeNumber([7,1,9,2]);