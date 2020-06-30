//write a tree
// tree means it has one root edge parent child leaf
//binarsysearchtree bst special tree means has onnly up to 2 child nodes for root 
//the vvalues ablve root node will go right and values below root will go left and continues

class Node{
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    //insert node in binary tree;
    insert(val){
        var newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }else{
            var current = this.root;
            while(true){
                if(val === current.val) return undefined;
                if(val < current.val){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                }else if(val > current.val){
                    if(current.right === null){
                        current.right = newNode
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }
    //seraching a val
    find(val){
      if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;//duplicates
            }
        }
        if(!found) return undefined;//for dublicates
        return current;    
    }

     //BFS means horizontal comparision to sibiling followed by root node.
    //FIFO
    BFS(){
        var node = this.root;
        var q = [];
        var data = [];

        q.push(node);
        while(q.length){
            node = q.shift();
            data.push(node.val);
            if(node.left) data.push(node.left.val);
            if(node.right) data.push(node.right.val)
        }
        return data;
    }

    //DFS mean vertical pre oreder is adding roots to result set
    DFSPreOrder(){
        var data = [];
        var current = this.root;
        function traverse(node){
          data.push(node.val);
          if(node.left)  traverse(node.left);
          if(node.right)  traverse(node.right);
        }
          
        traverse(this.root);
        return data;
    }
    //DFS post order means adding leafs to result set
    DFSPostOrder(){
        var data = [];
        function traverse(node){
          if(node.left)  traverse(node.left);
          if(node.right)  traverse(node.right);
          data.push(node.val);
        }
        traverse(this.root)
        return data;
    }
    // DFSInOrder means first traverse the left and theb right from leaf
    DFSInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

}


var tree = new BST();
tree.insert(10);     
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);