function countPairSum(arr1:number[],arr2:number[],k:number) {

    let count=0;
    for(let i=0;i<arr1.length;i++) {
        for(let j=0;j<arr2.length;j++) {
            if(arr1[i]+arr2[j]==k) {
                count++;
               
            }
             
        }
        
        
    }
    return count;

}
//console.log(countPairSum([1, 3, 5, 7],[2,3,5,8],10));


function countPairSum2(arr1:number[],arr2:number[],k:number) : number {
let count=0;
    let leftpoint=0;
    let rightPoint=arr2.length-1;

    while(leftpoint < arr1.length && rightPoint >=0) {
        if(arr1[leftpoint]+arr2[rightPoint] ==k) {
            leftpoint++;
            rightPoint--;
            count ++;

        } else if(arr1[leftpoint]+arr2[rightPoint] < k ){
            leftpoint++;
        } else {
            rightPoint--;
        }

    }
    return count;


}
console.log(countPairSum2([1, 3, 5, 7],[2,3,5,8],10));