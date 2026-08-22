const fruits2:string[] = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.sort());
console.log(fruits2.reverse());

const months = ["Jan", "Feb", "Mar", "Apr"];
const alt = months.toSorted();
console.log(alt);


const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);
console.log(points[points.length-1]);




//const ab = [40, 100, 1, 5, 25, 10];
function maxArr(ab: number []) : number{
    return  Math.max.apply(null, ab);
}
console.log(maxArr([40, 100, 1, 5, 25, 10]));
function maxArr2(ab: number []) : number{
    return  Math.min.apply(null, ab);
}
console.log(maxArr2([40, 100, 1, 5, 25, 10]));


const emn : ( number | string)[] = [40, "soupra", 1, "emni", 25, 10];
