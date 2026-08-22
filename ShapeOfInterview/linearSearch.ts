function linearSearch(arr:number[],trg:number) : number {

    for(let e of arr) {
        if(e==trg) {
            return e;    
        } 
    }
 return -1;

}
console.log(linearSearch([1,2,3,4],4));