let fa =  function(nums:number[]):number { //[0,0,1,1,1,2,2,3,3,4]
  
    let kl: number[] =[];

    for(let i = 0;i<nums.length;i++) {
        if(!kl.includes(nums[i])){
            kl.push(nums[i]);

        }
    }
     let k =  kl.length;

    return k;

}

fa([1,1,2]);
console.log(fa([0,0,1,1,1,2,2,3,3,4]));
