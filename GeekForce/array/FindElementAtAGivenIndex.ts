function FindElementAtAGivenIndex(arr:number[],x:number) : number {

    for(let i=0;i<arr.length;i++) {
        if(i==x) {
            return arr[i];
        }
    }
    return -1;
}
console.log(FindElementAtAGivenIndex([10,20,30,40,50],2));
