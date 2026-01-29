var arra = [1, 2, 4, 5];
var summ1 = 0;
var summ2 = 0;
for (var i = 0; i <= arra.length - 1; i++) {
    summ1 = summ1 + arra[i];
}
for (var i = 1; i <= 5; i++) {
    summ2 = summ2 + i;
}
var result = summ2 - summ1;
console.log(result);
