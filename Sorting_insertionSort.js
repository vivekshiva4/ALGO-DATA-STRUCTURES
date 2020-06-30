//write an algorithm for insertion sort.
// imsertion sort means it will compare the index 1 value i the array and make momparision and swap at the right position once.

function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        var currentValue = arr[i];
        for(var j = i-1; j >=0 && arr[j] > currentValue; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentValue;
    }
    return arr;
}

insertionSort([3,3,1,3,2,44,4,4,67,8,99])