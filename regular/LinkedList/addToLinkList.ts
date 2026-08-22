class Node4{
    value : number ;
     next : Node4 | null;

     constructor(value:number) {
        this.value =value;
        this.next = null;
     }
}

function insertAtEnd(head : Node4 | null, value: number): Node4  {

    const newnode = new Node4(value);

    if(head==null) {
        return newnode;
    }
    let current = head;

    while( current.next != null) {
        current = current.next;
    }
    current.next = newnode;
    return head;

}

let head5 = new Node4(10);

head5 = insertAtEnd(head5, 20);
head5 = insertAtEnd(head5, 30);
head5 = insertAtEnd(head5, 40);

printList(head5);