// const arra:number[] = [-5,2,10,4,6];
// let trz : number;


 function linearSearch(arrg : number[], tr:number) : number {

    for(let i=0;i<arrg.length;i++) {
        if(arrg[i]==tr) {
            return i; 
            
        }       
    }
    return -1;

 }

 console.log(linearSearch([-5,2,10,4,6],40));
 
 