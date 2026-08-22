function twoSumWithHas(a:number[],b:number):number[]{

    const map = new Map<number,number>();
    for(let i=0;i<a.length;i++){
        let rem = b - a[i];
        if(map.has(rem)){
            return [i,map.get(rem)!]
        } else {
            map.set(a[i],i)
        }

    }



    return [];

}


console.log(twoSumWithHas([2,6,5,8,11],14));
