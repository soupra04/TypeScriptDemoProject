function searchInsert(nums: number[], target: number): number {
    //Input: nums = [1,3,5,6], target = 5
//Output: 2
  let low:number = 0;
    let high :number= nums.length-1;
 //Input: nums = [1,3,5,6], target = 7 Output: 4
       while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(nums[mid]== target){
            return mid;
        } else if(nums[mid]<target){
            low = mid+1;

        } else {
            high = mid-1;

        }
    }
 return low; 

}

  ;
console.log(searchInsert([1,3,5,6],5)); // Output: 2
console.log(searchInsert([1,3,5,6],7)); // Output: 4