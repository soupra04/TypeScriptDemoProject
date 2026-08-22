function bubbleSorting(arrg: number[]) {

    let swapped: boolean;


    do {

        swapped = false;
        for (let i = 0; i < arrg.length-1; i++) {



            if (arrg[i] > arrg[i + 1]) {
                let temp = arrg[i];
                arrg[i] = arrg[i + 1];
                arrg[i + 1] = temp;
                swapped = true;  

            }
        }
    } while (swapped)

return arrg;

}
console.log(bubbleSorting([10,98,7,6,5,4]));
