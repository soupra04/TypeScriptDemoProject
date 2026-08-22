function removeDuplicates(nums: number[]): void {

    //nums [1,1,2]
    let a: number[] = [];
    // for (let i = 0; i < nums.length; i++) {
    //     if (!a.includes(nums[i])) {

    //         a.push(nums[i]);
    //     }
    // }

    let chk = function(v) {
        if(a.indexOf(v)==-1){
            a.push(v);

        }

    }

    nums.forEach(chk);
    console.log(a);

};
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
