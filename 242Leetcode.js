/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    s = s.split("").sort()
    t = t.split("").sort()

    if (t.length != s.length) {
        return false
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            return false;
        }
    }
    return true
};