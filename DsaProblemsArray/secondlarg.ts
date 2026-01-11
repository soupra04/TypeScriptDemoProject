const num : number [] = [ 5 , 1 , 4 ,3 ];

let larg:number = Infinity;
let sclarg:number = Infinity;

for(var i=0;i<num.length;i++){
    if(num[i]>larg){
        sclarg = larg;
         larg =num[i]
    } else if (num[i]< larg && num[i] > sclarg) {
         sclarg =num[i] ;
    }
}
console.log(larg);
console.log(sclarg);