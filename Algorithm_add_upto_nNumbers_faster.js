//Add upto n numbers

function addUpToNNumbers(n){
    return n * (n + 1)/2;
}

var t1 = performance.now();
addUpToNNumbers(100000000000);
var t2 = performance.now();

console.log('Time Elapsed: seconds = '+((t2 - t1) / 1000));