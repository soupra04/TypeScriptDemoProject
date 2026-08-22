const name1 = {
    "fname" : 'Soupra',
    "lname" : 'maity',
    sayMyName2 : function() {
        console.log(this.lname);
        
    }
}
console.log(name1.fname);
name1.sayMyName2();
