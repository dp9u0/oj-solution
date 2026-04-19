/*
 * @lc app=leetcode id=3681 lang=javascript
 *
 * [3681] Maximum XOR of Subsequences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxXorSubsequences = function(nums) {
    const basis = new Array(31).fill(0);
    for (const x of nums) {
        let v = x;
        for (let i = 30; i >= 0; i--) {
            if ((v >> i) & 1) {
                if (basis[i]) v ^= basis[i];
                else { basis[i] = v; break; }
            }
        }
    }
    let ans = 0;
    for (let i = 30; i >= 0; i--) {
        if ((ans ^ basis[i]) > ans) ans ^= basis[i];
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxXorSubsequences([1, 2, 3])); // 3
console.log(maxXorSubsequences([5, 2])); // 7
console.log(maxXorSubsequences([0, 0])); // 0
console.log(maxXorSubsequences([1, 1])); // 1
console.log(maxXorSubsequences([8, 4, 2, 1])); // 15
console.log(maxXorSubsequences([7, 7, 7])); // 7
