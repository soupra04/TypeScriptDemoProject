const num : number [] = [ 5 , 1 , 4 ,3 ,6];
var ecount=0;
var ocount=0;
for(var i:number=0;i<num.length;i++) {
    if(num[i]%2==0) {
        ecount++;

    } else {
        ocount++;
    }
    

}

console.log(ecount);
console.log(ocount);
