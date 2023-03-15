// 15. 3Sum (Medium)
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    nums.sort((a,b) => a-b)

    for(let i = 0; i < nums.length; i++){
        const a = nums[i];
        if (a > 0) break;
        if (i > 0 && a === nums[i -1]) continue;
        let left = i+1;
        let right = nums.length -1;

        while (left < right) {
            let sum = a + nums[left] + nums[right];
            if (sum === 0) {
                result.push([a, nums[left], nums[right]]);
                left++;
                right--;
                while (nums[left] === nums[left-1] && left < right) {
                    left++;
                }
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return result;
    };
    

    // let left = 0;
    // let right = nums.length-1;
    // let result = []

    // while (left < right) {
    //     if (nums.length === 3) {
    //         let sum = nums[0] + nums[1] + nums[2];
    //         if (sum != 0){
    //             return [];
    //         } else {
    //             return [nums];
    //         }
    //     } else {
    //         return result;
    //     }
    // }

};