const num : number [] = [ 5 , 1 , 4 ,3 ];
const rever : number [] = [];

for( var i = num.length-1;i>=0;i--){
    rever[num.length-1-i] = num[i];

}
console.log(rever);