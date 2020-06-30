// write an algortihm to swap the values in array

function swap(arr, idx1, idx2){
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    return arr;
}

swap([2,3,4,5],1,2)