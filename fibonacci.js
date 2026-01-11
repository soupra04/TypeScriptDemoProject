"use strict";
var num = 5;
var a = 0;
var b = 1;
for (var i = 0; i < num; i++) {
    console.log(a);
    var temp = a + b;
    a = b;
    b = temp;
}
