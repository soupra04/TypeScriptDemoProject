let map2 = new Map<string, number>();
map2.set("Virat",18);
map2.set("Bruno",30);

//console.log(map2.get('Virat'));
// map2.forEach((key,value)=> {
//     console.log("before delete")
//     console.log( `key ${key} , value ${value}`);

// });
// map2.delete('Virat');

// map2.forEach((value,key)=> { //iteration one
//     // console.log("after delete")
//     console.log( `key ${key} , value ${value}`);

// });
console.log(map2.size);

const fruitss = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);


// fruitss.forEach((value,key)=> { 
//     // console.log("after delete")
//     console.log( `key ${key} , value ${value}`);

// });
console.log(fruitss.has("orangess"));


// for(const x of fruitss.entries()) { //iteration two
//     console.log(`${x}`);
// }

console.log("///////////////////////");

for(const x of fruitss.keys()) {
    console.log(`${x}`);
}
let sum2:number=0;
for(const x of fruitss.values()) {
    console.log(`${x}`);
    sum2 = sum2+x;

 
}
console.log(sum2);