function removeElement(nums: number[], val: number): number { //[3,2,2,3]


    for(let i=nums.length-1;i>=0;i--) {
        if(nums[i]==val){
            nums.splice(i,1)

        }
    }
    console.log(nums);
    
    let k  = nums.length;
    return k;
    

    
    

    
};

console.log(removeElement([3,2,2,3],2));
