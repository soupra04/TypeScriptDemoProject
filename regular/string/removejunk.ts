let str : string = "@#soup%^&ra";
let clean : string = str.replace(/[^a-zA-Z0-9]/g, "");
console.log(clean);
let abc : string = "soupra";
console.log(abc.replaceAll('o', "a"));
