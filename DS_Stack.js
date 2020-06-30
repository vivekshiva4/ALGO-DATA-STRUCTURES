// write data structrucure for stack with singlylinkedlist
//LIFO
//here push means adding value to head insted of added to end
//popmeans remove head. insted of reoving last.

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //pushing the val into the stack i.e, reverse of push i.,e adding the value to head as ushift() isted of push();
    push(val){
        var newNode = new Node(val)

        if(!this.first){
            this.first = newNode;
            this.last = newNode;
            
        }else{
            newNode.next = this.first;
            this.first = newNode
            
        }
        return ++this.size;
    }

    // pop in the stack means shift() remove head 
    pop(){
        if(this.size === 0) return null;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        }else{
            var nodeTobeNull = this.first;
            nodeTobeNull.val = null;
            this.first = nodeTobeNull.next;
        }
        return --this.size;
    }
}

var stack = new Stack();
stack.push("one");
