/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let newS = s.replace(/[\W_]/g, "").toUpperCase()

    let leftPointer = 0;
    let rightPointer = newS.length - 1;

    while (leftPointer < rightPointer) {
        if (newS[leftPointer] === newS[rightPointer]) {
            leftPointer++;
            rightPointer--;
        } else {
            return false
        }
    }
    return true;
};