function twoSum(a:number[],b:number) : number[]{

    for(let i=0;i<a.length-1;i++){
        for(let j=i+1;j<a.length;j++){
            if(a[i]+a[j]==b){
                return [i,j];
                
            }
        }
        
    }
return [];

}
console.log(twoSum([2,6,5,8,11],14));
