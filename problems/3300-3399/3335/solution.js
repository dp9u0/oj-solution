/*
 * @lc app=leetcode id=3335 lang=javascript
 *
 * [3335] Total Characters in String After Transformations I
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function(s, t) {
    let MOD = 1e9 + 7;
    let count = new Array(26).fill(0);
    for (let c of s) count[c.charCodeAt(0) - 97]++;
    for (let step = 0; step < t; step++) {
      let z = count[25];
      for (let i = 25; i >= 1; i--) count[i] = count[i - 1];
      count[0] = z;
      count[1] = (count[1] + z) % MOD;
    }
    let ans = 0;
    for (let c of count) ans = (ans + c) % MOD;
    return ans;
};
// @lc code=end

// TEST:
console.log(lengthAfterTransformations("abcyy", 2));
console.log(lengthAfterTransformations("azbk", 1));
