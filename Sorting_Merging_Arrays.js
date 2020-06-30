// write a algorithm that will take two array and merge the sorted arrays into one array.

function mergeArrays(arr1,arr2){
    var result = [];
    var i = 0;
    var j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length){
        result.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        result.push(arr2[j])
        j++
    }
    return result;
}

mergeArrays([1,2,6],[2,5,8])