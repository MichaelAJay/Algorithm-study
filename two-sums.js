/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] <= target) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] === target - nums[i]) return [i, j]
            }
        }
    }
};