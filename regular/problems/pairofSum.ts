let ar : number [] = [-8, 1, 4, 6, 10, 45];

let left : number = 0;
let right : number =  ar.length-1;

let trg : number = 16;


while(left<right){

    let sum : number =ar[left] + ar[right]
    if(sum<trg) {
        left++;
    } else if ( sum > trg ){
        right--;
    } else if ( sum == trg ){
        console.log("found the pair " + ar[left] + " and " + ar[right]);  
        break;      
}


}