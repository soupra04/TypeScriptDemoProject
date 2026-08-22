type Fruit = {name: string } ;

const apple :Fruit= {name : "Apple"};
const bananas:Fruit = {name : "Bananas"};
const oranges:Fruit = {name : "Oranges"};

let fcount = new Map<Fruit, number>();
fcount.set(apple, 10);
fcount.set(bananas, 20);
fcount.set(oranges, 30);

fcount.forEach((value, key) => {
    console.log(key.name, value);

});




