function plusOne(digits: number[]): number[] {


// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].
    
let mul =1;
let sum = 0;
for(let i=digits.length-1;i>=0;i--){

    sum = sum + mul * digits[i];
    mul = mul * 10;
}
let res = sum+1;
console.log(res);
let str =  String(res).split('').map(Number);
return str;

}

console.log(plusOne([4,3,2,1]));
