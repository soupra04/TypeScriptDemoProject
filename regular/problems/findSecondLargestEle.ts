let lrg : number [] =  [12,35,1,10,34,1];



let largest : number  = -Infinity;
let secondlarges: number = -Infinity;

for( let e of lrg) {
    if(e > largest){
        secondlarges = largest;
        largest = e;
    } else if(e > secondlarges && e != largest) {
        secondlarges= e;

    }
}

console.log("Largest:", largest);
console.log("Second Largest:", secondlarges);