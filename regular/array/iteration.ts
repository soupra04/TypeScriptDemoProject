let empl : string [] = ["Banana", "Orange", "Apple", "Mango"];

//index based loop
for(let i = 0;i<empl.length; i++){
    console.log(empl[i]);
    
}

//for in log

for(let e in empl){
    console.log(empl[e]+ " " + e);
    
}