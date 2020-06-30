// write double linked list

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //pushing into array;
    push(val){
        var newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //pop remove last item
    pop(){
        if(!this.head) return undefined;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            var newTail = this.tail.prev;
            this.tail = newTail;
            this.tail.next = null; 
        }
        this.length--;
        return newTail;
    }

    //shift means remove head;
    shift(){
        if(!this.head) return undefined;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            var newhead = this.head.next;
            this.head.next.prev = null; 
            this.head = newhead;
        }
        this.length--;
        return newhead;
    }

    //unshift means add a new node to the head and make new head
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    //get will take idx
    get(idx){
        if(idx < 0 || idx >= this.length) return undefined;
        var midPoint = Math.floor(this.length/2);
        var counter = 0;
        var current = this.head;
        if(idx <= midPoint){
           while(counter !== idx){
            current = current.next;
            counter++       
           } 
           return current;
        }
        else{
            counter = this.length - 1;
            current = this.tail;
             while(counter !== idx){
                current = current.prev;
                counter--
             } 
             return current;
        }
     }

     //set take val and idx;
     set(val, idx){
         var valueFound = this.get(idx);
         if(valueFound != null){
             valueFound.val = val;
             return true;
         }
         return false;
     }

     //insert the values with the idx
     insert(val,idx){
         if(idx < 0 || idx > this.length) return undefined;
         if(idx === 0) return !!this.unshift(val);
         if(idx === this.length) return !!this.push(val);

         var newNode = new Node(val);
         var nodeFound = this.get(idx);
         if(nodeFound){
             var prevNode = this.get(idx -1);
             prevNode.next = newNode;
             newNode.next = nodeFound;
             nodeFound.prev = newNode;
             newNode.prev = prevNode;
             this.length++
             return true;
         }
        return false;
     }

     //remove will take idx and rmove this nodeFound
     remove(idx){
         if(idx < 0 || idx > this.length) return undefined;
         if(idx === 0) return !!this.shift();
         if(idx === this.length) return !!this.pop(); 

         var nodeFound = this.get(idx);
         var prevNode = nodeFound.prev;
         var nextNode = nodeFound.next;
         prevNode.next = nextNode;
         nextNode.prev = prevNode;
         nodeFound.next = null;
         nodeFound.prev = null;
         this.length--;
         return true;  
     }

     //reverse will reverse the linkedlist
     reverse(){
          let current = this.head;
          let prev = null;
          while(current){
               let next = current.next
               current.next = prev
               current.prev = next
               prev = current
               current = next
          }
          this.tail = this.head
          this.head = prev
            return this;
     }
     
}

 
var list = new DoubleLinkedList();
list.push("1");
list.push("2");
list.push("3");
list.push("4");     
list.push("5");