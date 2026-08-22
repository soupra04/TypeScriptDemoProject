function rotateArrayClockwise(arr:number[]) {
    

    let last = arr[arr.length-1];

    for(let i=arr.length-1;i>=0;i--) {
        arr[i] = arr[i-1];

    }
    arr[0] = last;

    console.log(arr);
    

}
//(rotateArrayClockwise([1,2,3,4,5]));

function rotateArrayByKpositionsClockWise(arr:number[], k:number) {

    for(let j =0;j<k;j++) {

        let last = arr[arr.length-1]
         for(let i=arr.length-1;i>=0;i--) {
            arr[i] =arr[i-1]
         }
         arr[0] =last;

    }
    
    console.log(arr);
    

}
//rotateArrayByKpositionsClockWise([1,2,3,4,5],2);

function rotateArrayByKpositionsAntiClockWise(arr:number[], k:number) {

    for(let j =0;j<k;j++) {

        let first = arr[0];

        for(let i=0;i<arr.length-1;i++) {

            arr[i] = arr[i+1];
        }

        arr[arr.length-1] = first;



    }
    console.log(arr);
    
    }
    rotateArrayByKpositionsAntiClockWise([1,2,3,4,5],2);