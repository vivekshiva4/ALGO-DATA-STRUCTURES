// write an agorithm which accept a number and it will add upto 0 and return value.
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function addUptoNnumbers(num){
    if(num === 0) return 0;
    return num + addUptoNnumbers(num -1);
}

addUptoNnumbers(10);

// in array
function addUptoNnumbersUsingArray(arr){
    if(arr.length == 0) return 0;
    return arr[0] + addUptoNnumbersUsingArray(arr.slice(1));
}


addUptoNnumbersUsingArray([1,2,3,4]);
