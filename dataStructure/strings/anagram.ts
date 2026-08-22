function anagram(a:string,b:string) : boolean {

    let andrm =false;

    if(!(a.length==b.length)){
        console.log("these is not anagram");
         return false;
        
    } else {

        let arr1 = a.split("");
        //console.log(arr1);
        
        let arr2 = b.split("");
        //console.log(arr2);
        
        arr1 = arr1.sort();
        console.log(arr1);
        
        
        arr2 = arr2.sort();
        console.log(arr2);
        
        if(arr1.join("")==arr2.join("")){
            console.log("anagram");
            andrm =true;
            
        } else {
            console.log("not anagram");
            andrm = false;
            
        }

        

    }

    return  andrm;

}
console.log(anagram("silent","listen"));

