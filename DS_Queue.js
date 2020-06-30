//write queue ds using singly linked list 
//FIFO
//here push means adding value to end as push works that way
//popmeans remove head. insted of reoving last.

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //push the val to end also as enQueue()
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            var lastNode = this.last;
            lastNode.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    //pop means remove the head as FIFO also called as deQueue()
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

var q = new Queue();
