// let nums = [2,7,11,15];
// let target = 9;

let test =  function(nums :number[],target:number) :number[] {
for(let i = 0 ; i <nums.length-1;i++) { // 0 1 2
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]==target){
           return [i,j];
        }
    }
}
return [] ;
}
 console.log(test([2,7,11,15],9));

 let fr2 =  function(nums :number[],target:number):number[] {
    for(let i = 0 ; i <nums.length-1;i++) { // 0 1 2
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]==target){
           return [i,j];
        }
    }
}
return [] ;
}

 
  
