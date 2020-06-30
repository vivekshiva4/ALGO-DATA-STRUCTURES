//Add upto n numbers

function addUpToNNumbers(n){
    let result = 0;
    for(let i = 1; i<=n; i++){
      result += i  
    }
    return result;
}

var t1 = performance.now();
addUpToNNumbers(100000000);
var t2 = performance.now();

console.log('Time Elapsed: seconds = '+((t2 - t1) / 1000));