"use strict";
// let nameS:string = "john";
//     console.log(nameS);
//     let arr:number[] = [ 1,2,3];
//     console.log(arr);
// let arr:(string|number)[] = [ "Soupra", 1,"bruno",4,"priya"];
// console.log(arr);
let fruits = [];
// fruits.push("apple","banana","orange");
// console.log(fruits);
// let matrix:number[][] = [
//  [ 1,2],[4,5]
// ]
// console.log(matrix);
// let arr:string[] = ["red","green","blue"];
// for(let b in arr){
//     console.log(arr[b]);
// }
// let age:number[]= [ 25,30,35];
// let okdoubledAges  = age.map(n =>n*2);
// console.log(okdoubledAges);
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let b in arr) {
    if (arr[b] % 2 == 0) {
        console.log(arr[b]);
    }
}
