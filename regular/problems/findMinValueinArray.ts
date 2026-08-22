let inpt2:number [] = [ 3,2,4,7,10,1,6,5];


let min:number = inpt2[0];

for(let i=0;i<inpt2.length;i++){
    if(min>inpt2[i]){
        min = inpt2[i];
    }
}

console.log(min);



