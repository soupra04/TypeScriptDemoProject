
function reverseArray(arr: any[]) {

    let arr2 : number [] = [];
    for(let i =arr.length-1;i>=0;i--) {
        arr2.push(arr[i]);
    }
    console.log(arr2);


}
//reverseArray([1,2,3,4,5]);

function reverseArrayWithoutinbuild(arr: any[]) {

    let arr2:number[] = [];

   for(let i =arr.length-1;i>=0;i--) {
        arr2[arr.length-1-i] = arr[i];
    }
    console.log("the final array : " + arr2)


}
//reverseArrayWithoutinbuild([1,2,3,4,5]);

function reverseArrayUsingTwoPointer(arr: any[]) {

    let left =0;
    let right = arr.length-1;

    while(left <right) {
        [arr[left],arr[right]] = [arr[right],arr[left]];
        left ++;
        right --;
    }
    console.log("the final array is here : " + arr)

}
reverseArrayUsingTwoPointer([1,2,3,4,5,6]);
