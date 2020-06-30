// heaps are nothing but a category of trees
//Binary Heaps
//Min and Max binary heaps
//binary heap is similar to binary tree but the rules are different as thre is no order for left and right as in binary tree
//Max binary tree has parent node has gretest value than child and min is opposite.
//storing the heaps for any index the left child in 2n+1 and right child is 2n+2
//to find parent for left n-1/2 floored
//heap always push to end means left node so only n-1/2 will calcutae the parent where n is the index

class BinaryMaxHeap{
    constructor(){
        this.values = [];
    }

    //insert
    insert(val){
       this.values.push(val);
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx; 
        }
    }

    //remove max element in the array that is root of the heap
    extractMax(){
       const length = this.values.length;
       [this.values[0],this.values[length - 1]] = [this.values[length - 1],this.values[0]] 
       var result = this.values.pop();
       var parentIdx = 0;
      
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild < element) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild < element) || 
                    (swap !== null && rightChild < leftChild)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    
       return result;
    }
}

var heap1 = new BinaryMaxHeap();
heap1.insert(1);
heap1.insert(18);
heap1.insert(27);
heap1.insert(199);
heap1.insert(51);
heap1.insert(41);
heap1.insert(39);
heap1.insert(45);
heap1.insert(12);
heap1.insert(33);

        