// write a pivot code and algorithm for quick sort
//quicksort means it will randomly pick a number and find the index and make ieration for the value picked randomly for greater than and less than

function pivot(arr, startIdx = 0, endIdx = (arr.length - 1)){
    var pivot = arr[startIdx];
    var swapIdx = startIdx;
    for(var i = startIdx+1; i <= endIdx; i++){
        if(pivot > arr[i]){
            swapIdx++
            [arr[swapIdx],arr[i]] = [arr[i],arr[swapIdx]]
        }
    }
    [arr[startIdx],arr[swapIdx]] = [arr[swapIdx],arr[startIdx]]
    return swapIdx;
}

//quick sort implementation using pivot function
// pivot means the index of the elment we are comparing.
function quickSort(arr, left = 0, right = arr.length -1){
    
    if(left < right){
        var pivotIndx = pivot(arr, left, right);
        quickSort(arr, left,pivotIndx - 1);
        quickSort(arr, pivotIndx +1 ,right);
    }
    return arr;
}

quickSort([4,6,7,89,1,2,6])