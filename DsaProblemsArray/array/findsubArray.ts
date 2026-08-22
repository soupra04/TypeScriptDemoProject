function findSubArray(arr:number[],trz:number): number[] {

    let lefti = 0;
    let righi=arr.length-1;

    while(lefti<righi) {
        let sum:number = arr[lefti]+arr[righi];
        
        if(sum==trz) {
            return [arr[lefti],arr[righi]];
        } else if (sum<trz) {
            lefti++
        } else {
            righi--;
        }

    
    }


    return [];

}
console.log(findSubArray([1, 2, 3, 7, 5],12));
