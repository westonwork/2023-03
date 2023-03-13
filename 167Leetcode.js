/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// Using two pointers approach since the array is sorted in non-dessccending order
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = (numbers[left] + numbers[right]);
        if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        } else {
            return [left + 1, right + 1]
        }
    }
};




















// var twoSum2 = function (numbers, target) {
    // newArr = []
    // for (let i = 0; i < numbers.length; i++) {
    //     for (let j = 1; j < numbers.length; j++) {
    //         console.log(numbers[i], numbers[j]);
    //         if ((numbers[i] + numbers[j]) === target) {
    //             i += 1;
    //             j += 1;
    //             newArr.push(i, j);
    //             return newArr;
    //         }
    //     }
    // }
    // return newArr;
// };