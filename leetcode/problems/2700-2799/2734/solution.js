/*
 * @lc app=leetcode id=2734 lang=javascript
 *
 * [2734] Lexicographically Smallest String After Substring Operation
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var smallestString = function(s) {
    let arr = s.split('');
    let i = 0, n = arr.length;
    // Skip leading 'a's
    while (i < n && arr[i] === 'a') i++;
    if (i === n) {
        // All 'a's, change last to 'z'
        arr[n - 1] = 'z';
        return arr.join('');
    }
    // Decrement until we hit 'a'
    while (i < n && arr[i] !== 'a') {
        arr[i] = String.fromCharCode(arr[i].charCodeAt(0) - 1);
        i++;
    }
    return arr.join('');
};
// @lc code=end

// TEST:
console.log(smallestString("cbabc")); // baabc
console.log(smallestString("aa")); // az
console.log(smallestString("acbbc")); // abaab
console.log(smallestString("leetcode")); // kddsbncd
