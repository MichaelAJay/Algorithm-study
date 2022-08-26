/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let runningSums = [];
    for (let i = 0; i < nums.length; ++i) {
        if (i === 0) {
            runningSums.push(nums[i]); 
        } else {
            runningSums.push(nums[i] + runningSums[i - 1]);
        };
    };
    return runningSums;
};