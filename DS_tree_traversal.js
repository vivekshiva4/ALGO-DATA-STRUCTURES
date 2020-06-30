// write a ds for traversing a tree;

class Node{
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class TreeTraversal{
    constructor(){
        this.root = null;
    }

    //BFS means horizontal comparision to sibiling followed by root node.
    BFS(){
        var node = this.root;
        var q = [];
        var data = [];

        q.push(node);
        while(q.length){
            node = q.shift();
            data.push(node);
            if(node.left) data.push(node.left);
            if(node.right) data.push(node.right)
        }
        return data;
    }
}