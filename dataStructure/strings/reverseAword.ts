function reverseAword(a:string){

    //let rev :string[] = [];
    let rev :string = "";

    for(let i=a.length-1;i>=0;i--){

        rev += a.charAt(i);


    }
    console.log(rev);

    // for(let i=a.length-1;i>=0;i--){
    //     rev.push(a[i]);
    // }
    // console.log(rev.join(""));
    
    

}
reverseAword("soupra");