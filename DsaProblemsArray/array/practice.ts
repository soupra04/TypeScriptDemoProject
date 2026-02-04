const dup3:number[] = [1 , 2, 3 , 5, 3 , 2 ];
// let unique:number [] = [];
// for(let i=0;i<dup3.length;i++) {
//     if(!unique.includes(dup3[i])){
//         unique.push(dup3[i]);
//     }
// }
// console.log(unique);

for(let i=0;i<dup3.length;i++) {
    let count:number=0;
    let isVisited:boolean  =false;

    for(let k=0;k<i;k++) {
        if(dup3[i]==dup3[k]) {
            isVisited=true;
            break;
        }
    }
    if(isVisited) {continue};
    for(let j=0;j<dup3.length;j++) {
         if(dup3[i]==dup3[j]) {
            count++;


    }
}
console.log(dup3[i] , count);
}
