let nam: string = "Soupra";
let name2:string = nam.toLowerCase();

let namearr : string[] = name2.split('');
let rev:string[] = [] ;

console.log(namearr);
for(let i=namearr.length-1;i>=0;i--){

//rev[namearr.length-1-i] = namearr[i];
rev.push(namearr[i])

}
console.log(rev);
console.log(rev.join(''));


