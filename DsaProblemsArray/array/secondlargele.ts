let ele:number[] = [ 1 , 8 , 5, 2 , 6];
ele.sort((a,b)=> a-b);
let max1 = ele[ele.length-1];
for(let i=ele.length-1;i>=0;i--) {
    if(ele[i]<max1){
        max1=ele[i];
        break;
    }


}
console.log(max1);
