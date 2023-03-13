/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    newArr = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {
            console.log(numbers[i], numbers[j]);
            if ((numbers[i] + numbers[j]) === target) {
                i += 1;
                j += 1;
                newArr.push(i, j);
                return newArr;
            }
        }
    }
    // return newArr;
};