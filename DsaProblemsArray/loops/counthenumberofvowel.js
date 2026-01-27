var name3 = "umbrella";
var name4 = name3.split('');
console.log(name4);
var vcount = 0;
var ccount = 0;
for (var i = 0; i < name4.length - 1; i++) {
    if (name4[i] == 'a' ||
        name4[i] == 'e' ||
        name4[i] == 'o' ||
        name4[i] == 'i' ||
        name4[i] == 'u') {
        //  console.log("number is vowel" + name4[i])
        vcount++;
    }
    else {
        //console.log("number is consonant" + name4[i])
        ccount++;
    }
}
console.log(vcount);
console.log(ccount);
