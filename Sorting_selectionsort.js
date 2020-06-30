// write an algorithm for slection sort
//selection sort means the min value is chechecked and stored the value in the starting and the loop repeats

function selectioSort(arr){
    for(var i = 0; i < arr.length; i++){
        var minimum = i;
        for(var j =i+1; j < arr.length; j++){
          if(arr[minimum] > arr[j]) minimum = j;
        }
       if(i != minimum) [arr[i],arr[minimum]] = [arr[minimum],arr[i]]
    }
    return arr;
}

selectioSort([32,4,5,62,33,4,55])