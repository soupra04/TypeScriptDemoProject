function display() {
    console.log("Welcome to TypeScript");
}
display();
//Named functions
////////////////
function Sum(x, y) {
    return x + y;
}
var res = Sum(100, 200);
console.log(res);
///anonymous functions
var greeting = function () {
    console.log("Hello Worls!!");
};
greeting();
