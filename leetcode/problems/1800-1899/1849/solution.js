/*
 * @lc app=leetcode id=1849 lang=javascript
 *
 * [1849] Splitting a String Into Descending Consecutive Values
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function(s) {
    const n = s.length;

    function dfs(start, prev, count) {
        if (start === n) return count >= 2;

        let val = 0n;
        for (let i = start; i < n; i++) {
            val = val * 10n + BigInt(s[i]);
            if (prev === null) {
                if (dfs(i + 1, val, count + 1)) return true;
            } else if (val === prev - 1n) {
                if (dfs(i + 1, val, count + 1)) return true;
            } else if (val > prev - 1n) {
                break;
            }
        }
        return false;
    }

    return dfs(0, null, 0);
};
// @lc code=end

// TEST:
console.log(splitString('1234'));     // false
console.log(splitString('050043'));   // true
console.log(splitString('9080701'));  // false
console.log(splitString('0090089'));  // true
