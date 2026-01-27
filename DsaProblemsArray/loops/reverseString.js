var nam = "Soupra";
var name2 = nam.toLowerCase();
var namearr = name2.split('');
var rev = [];
console.log(namearr);
for (var i = namearr.length - 1; i >= 0; i--) {
    //rev[namearr.length-1-i] = namearr[i];
    rev.push(namearr[i]);
}
console.log(rev);
console.log(rev.join(''));
