let arr:number [] = [ 1, 2 , 3 , 5 , 2 , 7];

for(let i=0;i<arr.length-1;i++) {
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            console.log("duplicate found"+ arr[i]);
            break;
            
        }
    }
    
}

const neeset = new Set(arr);
for(let e of neeset) {
    if(neeset.has(e)){
        console.log("duplicate found");
        
    } else {
        console.log("no duplicate found");
        
    }
    
}
