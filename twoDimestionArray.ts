var myarray:number[][]=[ [10,20], [40,50],[70,80]]
console.log(myarray);

var myarray2:(string | number)[][] = [ [10, "xyz"],["abc",100]];
console.log(myarray2);

console.log(myarray2[0][1]);

//loop for accessing elements
for(var i=0;i<myarray2.length;i++)
    {
    for(var j=0;j<myarray2[i].length;j++)
    {
        console.log(myarray2[i][j]);
    }
    

}