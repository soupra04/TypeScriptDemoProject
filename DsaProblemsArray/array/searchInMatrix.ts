function searchInMatrix(arr:number[][], trz:number) : boolean {


    for(let i=0;i<arr.length;i++) {
        for(let j=0;j<arr.length;j++) {
            if(arr[i][j]=trz) {
                return true;
            }
        }
    }


    return false;


}
console.log(searchInMatrix([[6, 23, 21], [4, 45, 32], [69, 11, 87]],320));
