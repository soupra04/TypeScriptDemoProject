function mergeSortedArray(a1:number[],a2:number[]){

    let i=0;
    let j=0;
    let result : number [] = [];

  while (i < a1.length && j < a2.length) {

      if(a1[i]<=a2[j]){
        result.push(a1[i]);
        i++;
    } else {
        result.push(a2[j]);
        j++;
    }

  }

  while(i<a1.length) {
    result.push(a1[i]);
    i++;
  }

   while(j<a2.length) {
    result.push(a2[j]);
    j++;
  }
    
    console.log(result);
    

}
mergeSortedArray([1,3,5],[2,4,6]);