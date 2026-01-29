const str1: string = "Soupra";
let reverse:string="";
for(let i=str1.length-1;i>=0;i--) {
    reverse += str1.charAt(i);

}
console.log(reverse);