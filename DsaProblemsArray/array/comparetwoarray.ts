let arr3: number[] = [4, 5, 8, 2];
let arr4: number[] = [4, 1, 8, 2,6];

arr3 = arr3.sort((a,b) => a-b);

arr4 = arr4.sort((a,b) => a-b)
console.log(arr3);
console.log(arr4);

let match:boolean = true;
if (arr3.length == arr4.length) {
    for(let i = 0;i<arr3.length;i++) {
        if(arr3[i]!=arr4[i]){
            match=false;
            break;
        }

    }
    if(match==false) {
        console.log("checked both array and it seems they are not identical");
    } else {
        console.log("they are identical");
    }
    
} else {
    console.log("not same array because length is not event same of both the array");
}