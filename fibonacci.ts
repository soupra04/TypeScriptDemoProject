var num: number = 5;

var a: number = 0;
var b: number = 1;


for (var i: number = 0; i < num; i++) {
    console.log(a);
    var temp = a + b;
    a = b;
    b = temp;
}


