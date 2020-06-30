// write a algorith to find unique values in an array
function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
  var i = 0;
   for ( j = 1; j< arr.length; j++){
     if(arr.length === 0) return 0;
       if(arr[i] !== arr[j]){
           i++;
           arr[i] = arr[j];
           //console.table(i,j);
       }
   }
   return i + 1;
}

countUniqueValues([1,1,2,3])