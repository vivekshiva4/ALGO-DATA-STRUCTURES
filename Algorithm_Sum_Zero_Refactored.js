// write an algorithm with pointers which is a sorted array of integers which find the first pair which sum return 0.
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
     let sum = arr[left] + arr[right];
     if(sum === 0){
        return [arr[left],arr[right]];
      }else if(sum > 0){
        right--;
      }else{
        left++;
      }             
    }    
}


sumZero([-4,-2,-1,0,1,2,3,5]);