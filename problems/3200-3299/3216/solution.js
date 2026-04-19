/*
 * @lc app=leetcode id=3216 lang=javascript
 *
 * [3216] Lexicographically Smallest String After a Swap
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function(s) {
    const arr = s.split('');
    for (let i = 0; i + 1 < arr.length; i++) {
        const a = parseInt(arr[i]), b = parseInt(arr[i + 1]);
        if (a % 2 === b % 2 && a > b) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            break;
        }
    }
    return arr.join('');
};
// @lc code=end

// TEST:
console.log(getSmallestString("45320")); // "43520"
console.log(getSmallestString("001")); // "001"
console.log(getSmallestString("13")); // "13"
console.log(getSmallestString("31")); // "13"
console.log(getSmallestString("24")); // "24"
console.log(getSmallestString("42")); // "24"
