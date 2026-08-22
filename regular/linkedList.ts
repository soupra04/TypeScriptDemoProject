class Node2 {
    value: number;
    next: Node2 | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: Node2 | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
         return this.size == 0;
    }
    getSize() {
        return this.size
    }

     prepend(value: number) {

        const nodenew = new Node2(value);
        if(this.isEmpty()){
            this.head =nodenew;
        } else {
            nodenew.next = this.head;
            this.head=nodenew;

        }
        this.size++;

     }


     print() {
        if(this.isEmpty()){
            console.log("List is empty");   
        } else {
             let currr = this.head;
             let listValue = ' ';
             while(currr) {
                listValue += `${currr.value} `
                currr = currr.next;
             }
             console.log(listValue);
             
             
            }
        }
    
   

   

}
 const list2 =  new LinkedList();
 console.log(list2.isEmpty());
 list2.print();
 
 console.log(list2.getSize());
 console.log(list2.prepend(10));
  list2.print();
  list2.prepend(20);
    list2.prepend(30);
list2.print();

 
 
 