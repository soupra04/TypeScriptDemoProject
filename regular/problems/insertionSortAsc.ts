function insertionSorta(arrg: number[]) {

    for(let i=0;i<arrg.length;i++) {
        let numberToInsert = arrg[i];
        let j = i+1;
        while(j>=0 && arrg[i] > numberToInsert) {
            arrg[j+1] = arrg[j];
            j=j+1
        }
        arrg[j+1] = numberToInsert;

    }




}
console.log(insertionSorta([10,98,7,6,5,4]));
