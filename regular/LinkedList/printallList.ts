class Node34 {
    value: number;
    next: Node34 | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class linkedList6 {

    head : Node34 | null;
    size : number;

    constructor(){
        this.head = null;
        this.size = 0;


    }
    isEmplty() {
        return this.size ==0;
    }

    getSize() {
        return this.size;
        
    }

      prepend(value:number) {
        const node = new Node34(value);
        if(this.isEmplty()) {
            this.head = node;
            this.size++;
        } else {
            node.next = this.head;
            this.head= node;
        }
        this.size++;


    }

    print() {
        if(this.isEmplty()) {
            console.log("List is empty");
            
        } else {
            let curr = this.head;
            let listvalues = ''; //store node values
            while(curr){
                listvalues = listvalues + `${curr.value}`
               curr= curr.next;
            }
            console.log(listvalues);
            
        }
    }

   

    

}





const list5 = new linkedList6();
list5.print();
list5.prepend(10);
list5.print();
list5.prepend(20);
list5.prepend(30);
list5.prepend(40);
list5.print();



