// 15. 3Sum (Medium)
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let left = 0;
    let right = nums.length-1;
    let result = []

    while (left < right) {
        if (nums.length === 3) {
            let sum = nums[0] + nums[1] + nums[2];
            if (sum != 0){
                return [];
            } else {
                return [nums];
            }
        } else {
            return result;
        }
    }
};