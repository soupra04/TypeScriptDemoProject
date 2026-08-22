let all : number [] = [0,1,0,3,12];

let newall : number [] = [];

for(let i=0;i<all.length;i++) {
    if(all[i]!=0){

        newall.push(all[i]);


    }
}
while(newall.length < all.length) {
    newall.push(0)
}
console.log(newall);



console.log("///////////////////////////");

let index : number = 0;

for(let i=0;i<all.length;i++) {
    if(all[i] != 0) {


        all[index] = all[i];
        index++;

    }
}
while(all.length > index ) {
    all[index] = 0;
    index++;
}

console.log(all);

