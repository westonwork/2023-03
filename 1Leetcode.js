/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// First solution
// var twoSum = function (nums, target) {
//     var temp = 0;
//     var newArr = [];
//     for (var i = 1; i < nums.length; i++) {
//         if (temp + nums[i] === target) {
//             newArr.push(nums[i]);
//         }
//         if (nums[i] < target) {
//             var temp = nums[i];
//         }
//     }
//     return newArr
// };

// Updated solution
var twoSum = function(nums, target) {
    let newArr = [];
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target) {
                newArr.push(i, j);
                return newArr
            }
        }
    }
};