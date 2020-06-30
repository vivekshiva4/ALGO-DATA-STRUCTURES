//write a algorithm for linear search which accepts a array and a number if number found in it return index or -1.

function linearSearch(arr,num){
    if(arr.includes(num)){
        return arr.indexOf(num)
    }
    return -1;
}


function linearSearchUsingforloop(arr,val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}
linearSearchUsingforloop([1,2,2,2,2,2,2,2,2,2,,2,2,2,2,2,3,3,4,5,5,5,6,6,787,3,4,5],4)