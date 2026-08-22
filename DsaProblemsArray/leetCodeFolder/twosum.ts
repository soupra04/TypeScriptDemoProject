function twoSum(arr7:number[],trg:number):number[] {
    

for(let i=0;i<arr7.length-1;i++) {
    for(let j=i+1;j<arr7.length;j++){
        if(arr7[i]+arr7[j]==trg){
            console.log("items are found");
            return [i,j];
            
            
        }
    }
   

}
 return [];
}
console.log(twoSum([2,7,11,5],9));
