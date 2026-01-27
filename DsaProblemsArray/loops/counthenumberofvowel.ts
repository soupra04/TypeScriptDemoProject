let name3:string = "umbrella";
let name4:string[] =name3.split('');
console.log(name4);
let vcount:number=0;
let ccount:number=0;

for(let i=0;i<name4.length-1;i++){
    if(name4[i]=='a' ||
        name4[i] =='e' ||
        name4[i]== 'o' ||
         name4[i]== 'i' ||
         name4[i]==  'u') {
      //  console.log("number is vowel" + name4[i])
      vcount++;


    } else {
        //console.log("number is consonant" + name4[i])
        ccount++;
    }
}
console.log(vcount);
console.log(ccount);
