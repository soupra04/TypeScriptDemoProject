//another way to declare array
//var fruits: Array<String>;
//fruits=["apple","mango","banana"];
// console.log(fruits);
// //multie type array
// var values:(string | number) [] = ["apple", 100, "banana", 500];
// console.log(values);
// var valyues2:Array<string | number> = ["apple", 100, "banana", 500];
// console.log(valyues2);
//access array elements
var fruits = ["apple", "mango", "banana"];
// console.log(fruits[1]);
//using for loop
// for(var i:number=0;i<fruits.length;i++) {
//     console.log(fruits[i]);
// }
//using for which loop
for (var i in fruits) {
    console.log(fruits[i]);
}
