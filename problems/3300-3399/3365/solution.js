/*
 * @lc app=leetcode id=3365 lang=javascript
 *
 * [3365] Rearrange K Substrings to Form Target String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
var isPossibleToRearrange = function(s, t, k) {
    let len = s.length / k;
    let map = new Map();
    for (let i = 0; i < s.length; i += len) {
        let sub = s.substring(i, i + len);
        map.set(sub, (map.get(sub) || 0) + 1);
    }
    for (let i = 0; i < t.length; i += len) {
        let sub = t.substring(i, i + len);
        let cnt = map.get(sub);
        if (!cnt) return false;
        if (cnt === 1) map.delete(sub);
        else map.set(sub, cnt - 1);
    }
    return true;
};
// @lc code=end

// TEST:
console.log(isPossibleToRearrange('abcd', 'cdab', 2)); // true
console.log(isPossibleToRearrange('aabbcc', 'bbaacc', 3)); // true
console.log(isPossibleToRearrange('aabbcc', 'bbaacc', 2)); // false
