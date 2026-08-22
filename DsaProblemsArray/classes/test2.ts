class Student{

name:string;
age:number;

constructor(name:string,age:number) {
    this.name=name;
    this.age=age;
}

display():void{
    console.log(`${this.name} is ${this.age} years old`);
}


}

const std = new Student("Soupra", 18);
std.display();

