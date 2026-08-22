let num1: number[] = [10, 50, 20, 30, 65];

for (let n of num1) {       // for...of → values
    //console.log(n);
}

let num5: number[] = [10, 50, 20, 30, 40, 65];

for (let n in num5) {        // for...in → indexes
    //console.log(n);
}

//while loop //no of iteration is not fixed

let p = 10;

while(p<=10) {
    //console.log(p);
    p++;
    
}

//do while loop

let d = 11;

do {
    console.log(d);
    d++;
    
}
while(d<=10);