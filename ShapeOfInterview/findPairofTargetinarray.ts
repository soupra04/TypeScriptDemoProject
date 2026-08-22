function pairOfTargetInArray(
    arr: number[],
    target: number
): number[][] {

    const result: number[][] = [];

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        const sum = arr[left] + arr[right];

        if (sum === target) {
            result.push([arr[left], arr[right]]);

            left++;
            right--;
        }
        else if (sum < target) {
            left++;
        }
        else {
            right--;
        }
    }

    return result;
}

const result = pairOfTargetInArray(
    [1, 2, 3, 4, 5, 6],
    7
);

result.forEach((pair) => {
    console.log(pair);
});