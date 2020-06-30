//write a bubble sort for array assending the array
//bubble sort means top value in the array is sorted first and that element is stored in last.and remaining itrations continue.

function bubbleSort(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
        noSwaps = true;
        for(var j = 0; j < i-1; j++){
            if(arr[j] < arr[j+1]){
                //swapping the values in the array using indexes i.e., swapping the indexes means swaping the values
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                noSwaps = false;
                // setting noSwaps false means run the loop. 
            }
        }
        if(noSwaps) break;
        //if values in the is sorted then no need of iteration so we are breaking the main for loop.
    }
    return arr;
}

bubbleSort([1,3,2,5,4,6])