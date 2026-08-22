function binarySearch(arr:number[],target:number) {

    let low = 0;
    let high = arr.length-1;

    let mid=0;

    while(high >= low) {
        mid = Math.floor((low+high)/2);

        if(arr[mid]==target) {
            return mid;
        } else if(arr[mid]>target){
            high = mid -1;

        } else {
            low =mid+1;
        }
    }
    return -1;

}
console.log(binarySearch([1,2,3,4,5],4));