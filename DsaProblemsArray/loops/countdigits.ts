let mu : number = 1234;
let ct : number =0;

while(mu>0) {
    let rem =  mu  % 10;
    ct++;
    mu = Math.floor(mu /10);

}
console.log(ct);

