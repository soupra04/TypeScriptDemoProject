function searchIn2DArray(arr:number[][],k:number) : boolean {

    for(let i=0;i<arr.length;i++) {
        for(let j=0;j<arr[i].length;j++) {
            if(arr[i][j]==k){
                return true;
            }
        }
       
    }

 return false;

    
}
console.log(searchIn2DArray([[6, 23, 21], [4, 45, 32], [69, 11, 87]],325));
