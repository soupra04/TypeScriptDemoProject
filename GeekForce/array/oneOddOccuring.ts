function findOddOccurrence(arr: number[]): number {
    let xor = 0;

    for (const num of arr) {
        xor ^= num;   // same as: xor = xor ^ num
    }

    return xor;
}

console.log(findOddOccurrence([1, 2, 3, 2, 3, 1, 3])); // Output: 3