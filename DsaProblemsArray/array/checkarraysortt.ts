let ele1:number[] = [ 1 , 8 , 5, 2 , 6];
let iSorted:boolean = true;
for(let i=0;i<ele1.length;i++) {
    if(ele1[i]>ele1[i+1]) {
        iSorted=false;
        break

    }
}
if(!iSorted){
    console.log("array is not sorted")
} else {
    console.log("array is sroted");
}
