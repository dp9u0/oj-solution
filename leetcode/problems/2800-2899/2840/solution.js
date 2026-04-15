/*
 * @lc app=leetcode id=2840 lang=javascript
 *
 * [2840] Check if Strings Can be Made Equal With Operations II
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function(s1, s2) {
    let even = new Array(26).fill(0);
    let odd = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        if (i % 2 === 0) {
            even[s1.charCodeAt(i) - 97]++;
            even[s2.charCodeAt(i) - 97]--;
        } else {
            odd[s1.charCodeAt(i) - 97]++;
            odd[s2.charCodeAt(i) - 97]--;
        }
    }
    for (let i = 0; i < 26; i++) {
        if (even[i] !== 0 || odd[i] !== 0) return false;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(checkStrings("abcdba", "cabdab")); // true
console.log(checkStrings("abe", "bea")); // false
