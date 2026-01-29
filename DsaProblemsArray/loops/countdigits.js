var mu = 1234;
var ct = 0;
while (mu > 0) {
    var rem = mu % 10;
    ct++;
    mu = Math.floor(mu / 10);
}
console.log(ct);
