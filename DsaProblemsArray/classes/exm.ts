class Person {
  private name: string;

  public constructor(name:string) {
    this.name = name;

  }
  public getName(): string {
    return this.name;

  }

  
}
   const ps = new Person("soupra");
   console.log(ps.getName());



 // person.name isn't accessible from outside the class since it's private