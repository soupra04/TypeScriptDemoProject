let name36 = "soupra";

//name36 = 15; // inference 

let arr78 : number [] = [ 1 , 5 , 8 , 9];

// for(let i=0;i<=arr78.length;i++) {

// }
let res64:number = 0;
let _sum = function(v,i,arr){
    res64 =res64 + v;

};
let total:number=1;
let multi = function(v) {
    total *= v;


}

arr78.forEach(multi);
console.log(total);
arr78.forEach(_sum);


console.log(res64);


let blnk:number[] = [];

let fr = function(v,i,arr){

    arr[i] = arr78[i]+1;
    //blnk.push(v+1);
    blnk.push(++v);
}

arr78.forEach(fr);
console.log(blnk);
console.log(arr78);


let v = 1;
console.log(v++);
console.log(v);

//map

let vr  =arr78.map((v)=>{
    return ++v;

})
console.log(vr);
