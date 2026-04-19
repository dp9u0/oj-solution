/*
 * @lc app=leetcode id=1415 lang=javascript
 *
 * [1415] The k-th Lexicographical String of All Happy Strings of Length n
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    let total = 3 * Math.pow(2, n - 1);
    if (k > total) return '';
    k--;
    let chars = ['a', 'b', 'c'];
    let result = '';
    let prev = -1;
    for (let i = 0; i < n; i++) {
        let remaining = n - 1 - i;
        let groupSize = Math.pow(2, remaining);
        let idx, choices;
        if (i === 0) {
            choices = chars;
        } else {
            choices = chars.filter((_, j) => j !== prev);
        }
        idx = Math.floor(k / groupSize);
        result += choices[idx];
        prev = chars.indexOf(choices[idx]);
        k %= groupSize;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(getHappyString(1, 3)); // "c"
console.log(getHappyString(1, 4)); // ""
console.log(getHappyString(3, 9)); // "cab"
console.log(getHappyString(2, 7)); // ""
