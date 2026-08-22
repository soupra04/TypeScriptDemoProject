//Arrow function => fat arrow or lambda function
let info = () => {
    console.log("hello ts");
}
let printinfop = ()=> console.log("hello");
info();

let add = (x:number, y:number) : number => {
    return x+y;
}
console.log(add(5,10));