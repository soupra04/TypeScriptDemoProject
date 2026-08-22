class Node9 {
    value: number;
    next : Node9 | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;

    }
}

class linkedList4{

    head : Node9 | null;
    size : number;


    constructor(){
        this.head = null;
        this.size =0;
    }

    isEmpty() {
        return this.size==0;
    }

    print(head: Node9 | null)  {
        if(this.isEmpty()) {
            console.log("list is empty");
            
        } else {
            let curr =  head;
            let listvalues:number[] = [];
            while(curr) {
                listvalues.push(curr.value);
                curr = curr.next;
            }
            return listvalues;
            

        }
    }

}

const pr = new linkedList4();
console.log(pr.print());