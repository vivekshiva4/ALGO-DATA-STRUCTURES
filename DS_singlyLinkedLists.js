// Write data structure for sinle linked list
//single linked list
//it contains nodes and each node has next pointer and a value for it.
//singly linked list conatin head tail and length.
//head is start of node and tail is end of the node and connected to one node.
//one to one node relation ship.

//creating a node

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //inserting
    push(val){
        var newode = new Node(val);
        if(!this.head){
            this.head = newode;
            this.tail = this.head;
        } else {
            this.tail.next = newode;
            this.tail = newode;
        }
        this.length++;
        return this;
    }

    //deleting pop
   pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
     
    //shift means removing the head
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length --;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return currentHead;
    }

    //unshift will add the node to head and become new head
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode
        }else{
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
        
    return this;
    }

    //get value by index
    get(idx){
        if(idx < 0 || idx >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== idx){
            current = current.next;
            counter++;
        }
        return current;

    }
    //set value and based on idex position
    set(val,idx){
        var foundNode = this.get(idx);
        console.log(foundNode)
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;

    }

    //insert a new node with value and idx
    insert(val,idx){
        if(idx < 0 || idx > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);

        var newNode = new Node(val);
        var nodeFound = this.get(idx);
        if(nodeFound){
            var pNode = this.get(idx - 1);
            pNode.next = newNode;
            newNode.next = nodeFound
            this.length++
            return true;
        }
        return false;
    }
    //remove will take idx
    remove(idx){
        if(idx < 0 || idx >= this.length) return false;
        if(idx === this.length -1) return !!this.pop();
        if(idx === 0) return !!this.shift();

        var previousNode = this.get(idx -1)
        previousNode.next = previousNode.next.next;
        this.length--;
        return true;
    }

    //reverse the linked list
    reverse(){
       var node = this.head;
       this.head = this.tail;
       this.tail = node;
       var next;
       var prev = null;
       for(var i = 0; i < this.length; i++){
           next = node.next;
           node.next = prev;
           prev = node;
           node = next;
       }
       return this;
    }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("Bye")
// list.pop()
// list.shift()
//list.set("24",0)
