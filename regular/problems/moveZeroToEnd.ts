let ina:number[] = [ 8,1,0,2,1,0,3];
let inb:number[] = [];

// for(let i=0;i<ina.length;i++) {
//     if(ina[i]!=0){
//         inb.push(ina[i]);
        
//     }

// }
// while(inb.length<ina.length) {
//     inb.push(0)
// }
// console.log(inb);

let count:number=0;

for(let i=0;i<ina.length;i++) {
    if(ina[i] !=0){
        ina[count] = ina[i];
        count++;
    }

}
while(count<ina.length){
    ina[count] = 0;
    count++;
}

console.log(ina);
