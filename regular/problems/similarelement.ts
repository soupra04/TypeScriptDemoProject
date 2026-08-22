let ina = [ 1,2,2,1];
let inb = [ 2, 2];

let myset  = new Set<number>;

for(let e of ina) {
    myset.add(e);
}

let myset2:number[]  = [];

for(let b of inb) {
   if( myset.has(b) && !myset2.includes(b)){
    myset2.push(b);


   }
}
console.log(myset2);
