function arraySearch(arr: number[], k: number): number[] {

    for (let i=0;i<arr.length;i++) {
        if(arr[i]==k) {
            return [i];

        
    }


    

    }
    return [-1];

}
console.log(arraySearch([10, 8, 30, 4, 5],50));


