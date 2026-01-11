const num: number[] = [ 4, 2, 7 ,6];
console.log(num.length);
console.log(num.toString()); // method returns the elements of an array as a comma separated string.
//console.log(num.at(2)); // he at() method returns an indexed element from an array. The at() method returns the same as []

console.log(num.join("*")); //The join() method also joins all array elements into a string.
console.log(num.pop()); //remove the last element of an array
num.push(8); //add element into the array
console.log(num.toString());
console.log("first element of an array" + num.shift()) ; //remove the first ele of an array
console.log(num);     // 2 , 7 ,8 
console.log("adding first element to the array" + num.unshift(5)) ; //add element to first position of an array
console.log(num); // 5 , 2 , 7 ,8
console.log(Array.isArray(num)); //returns true if num is array

const num3:number[] = [ 1 , 8, 7];
const mergeArray: number [] = num.concat(num3); //concat() method concat two array end to end
console.log(mergeArray);

//console.log(num.copyWithin(5,0,1)) // 5 2 7 8  5 2


