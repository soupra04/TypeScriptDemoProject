let dup:number[] = [ 1,2,4,2,3];

let dup1:number[] = [] ;

for(let i:number=0;i<dup.length;i++) {
    if(!dup1.includes(dup[i])){
        dup1.push(dup[i]);

    }
 
    
}
console.log(dup1);