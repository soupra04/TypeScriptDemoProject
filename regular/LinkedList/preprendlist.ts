//create a new node that will be added to the linked list at the bgining
class  Node3 {

    value : number;
    next : Node3 | null;

    constructor(value:number) {
        this.value = value;
        this.next = null;


    }
}

class linkedList {

    head : Node3 | null;
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

    //list is empty && not empty

    prepend(value:number) {
        const node = new Node3(value);
        if(this.isEmplty()) {
            this.head = node;
            this.size++;
        } else {
            node.next = this.head;
            this.head= node;
        }
        this.size++;


    }

    //when list is not empty : make newly created note point at the head note && make the newly added node as head of the list




}

const list = new linkedList();
list.prepend(20);

