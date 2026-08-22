function removeDuplicates(arr:number[]){

    const setabc = new Set<number>;

    for(let i=0;i<arr.length;i++) {
        setabc.add(arr[i]);
    }

    console.log(setabc);


}
//removeDuplicates([1,3,4,2,3,4,5]);


function removeDuplicareInSortedArray(arr:number[]) {
    let j =0;

    for(let i=0;i<arr.length;i++) {
        if(arr[i] !==arr[j]){
            j++;
            arr[j]= arr[i];
        }
    }
    return arr.slice(0,j+1);

}
console.log(removeDuplicareInSortedArray([1,1,2,2,3,3]));