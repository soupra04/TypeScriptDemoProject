function sortingofMap() {

//     Map:
// Apple  → 50
// Banana → 20
// Mango  → 40
// Orange → 10

let myMap = new Map<string,number>();

myMap.set("apple",50);
myMap.set("Banana",20);
myMap.set("Mango",40);
myMap.set("Orange",10);



const entries = Array.from(myMap.entries());
entries.sort((a,b) => a[1] - b[1]);

entries.forEach((value,key) =>{
    console.log(`key : ${key} , value : ${value}`);
    

})



}
sortingofMap();