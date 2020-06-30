//implement algorithm for radix sort,
//radix sort means instead of comparion sorting the radix sort is
//taking once place in every element and add to bucket and loop continues to 10's place, 100Th place, 10000Th place and goes on.
//bucket  _ _ _ _ _ _ _ _ _ _ 
//        0 1 2 3 4 5 6 7 8 9

//function will take a number and base place vaue i,e., 0,1,2,3,4 ones tens, hunfreds, thousands.

function getDigit(num, basePlace){
    
    return Math.floor(Math.abs(num) / Math.pow(10, basePlace) % 10)
}

getDigit(12345,0)

//count number of digits in a number
function countDigits(num){
    if(num === 0) return 1;//added base case because for 0 Math.log10(0) = -Infinity;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

countDigits(12342222222222222222222222222222222222222222222222222222222222222222)

//return the  largest number of digits among the array.
function maxDigitCount(arr){
    var max = 0;
    for(var i =0; i < arr.length; i++){
     if(arr[i] === 0) return 1;//added base case because for 0 Math.log10(0) = -Infinity;
     var newMax = Math.floor(Math.log10(Math.abs(arr[i]))) + 1;
     if(newMax > max) max = newMax;
    }
    return max;
}

maxDigitCount([1,333,4,5,555,66,777777])

//Implementing radix sort using the above methods;
function radixSort(arr){
     var maxDigitCountInArray = maxDigitCount(arr);
     //creating 10 buckets from 0 to 9 as empty arrays for once place 10's place form  0 to 9
       
    for(var k =0; k < maxDigitCountInArray; k++){
       var digitBucket = Array.from({length:10}, () => [])
    //loop for maxDigitCountInArray
        for(var i =0; i < arr.length; i++){
            digitBucket[getDigit(arr[i],k)].push(arr[i])
        }
        arr = [].concat(...digitBucket);
    }
    return arr;
}

radixSort([1,222,335,4678,22,33,890,987,334])