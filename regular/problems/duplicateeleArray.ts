const lett  : number [] = [1,3,4,2,2];


for(let i =0;i<lett.length-1;i++) {
    for(let j=i+1;j<lett.length;j++){
        if(lett[i]==lett[j]){
            console.log("found the duplicate " + lett[i]);
            
            break;
        }
    }
   

}


const newset = new Set<number>();

for( const num of lett) {
    if(newset.has(num)){
        console.log("found the duplicate " + num);
        break;

    }
    newset.add(num);
}
