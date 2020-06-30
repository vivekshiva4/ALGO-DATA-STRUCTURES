// write an algorithm for merge sort//
// merger sort means split arry into mid pointa and splits goes on into single emenet and then compares and merge

function mergerSort(arr){
    if(arr.length <= 1) return arr;
    var mid = Math.floor(arr.length/2)
    var left = mergerSort(arr.slice(0,mid))//calls the function and add the call stcak and return array each time incremental ad poped and added into array
    var right = mergerSort(arr.slice(mid))
    
    return mergeArrays(left,right);
    
    //function to compare and merge arrays
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

}

mergerSort([2,-1,3,6,4,4,4,4,4,5,6,7,81,2,3,4,5,55,67,0])


