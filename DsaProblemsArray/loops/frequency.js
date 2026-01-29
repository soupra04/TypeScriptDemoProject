var ab = "Hellho";
var abd = ab.split('');
//1 2 3 4
// 0 1 2 3
var map = {};
for (var _i = 0, ab_1 = ab; _i < ab_1.length; _i++) {
    var ch = ab_1[_i];
    if (map[ch]) {
        map[ch]++;
    }
    else {
        map[ch] = 1;
    }
}
console.log(map);
