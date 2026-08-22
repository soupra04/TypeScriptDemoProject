function lastduplicateinArray(arr: number[]): number[] {

    let value = -1;
    let index = -1;

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] == arr[i + 1]) {
            index = i+1;
            value = arr[i];

        }
    }

    return [index,value]
}

console.log(lastduplicateinArray([1, 5, 5, 6, 6, 7]));
