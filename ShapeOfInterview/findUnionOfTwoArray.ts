function findUnionofArray(a:number[],b:number[]) {

//     arr1 = [1, 2, 3, 4]
// arr2 = [3, 4, 5, 6]

const myset = new Set<number>();

for(let e of a) {
    myset.add(e);
}
for(let e of b) {
    myset.add(e);
}

for(let e of myset) {
    console.log(e);
    
}


}
findUnionofArray([1, 2, 3, 4],[3, 4, 5, 6])