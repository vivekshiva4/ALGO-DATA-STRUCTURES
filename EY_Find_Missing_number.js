//An array of 99 elements contains integers from 1 to  100 with one missing element. Find the missing element?

var missingNumber = function(nums) {
    var n = nums.length;
    var total = n * (n + 1) / 2;
    for(let i = 0; i < n; i++){
        total -= nums[i];
    }
    return total;
};