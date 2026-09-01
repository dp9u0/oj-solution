/*
 * @lc app=leetcode id=779 lang=javascript
 *
 * [779] K-th Symbol in Grammar
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    // Result = popcount(k-1) % 2
    let val = k - 1;
    let count = 0;
    while (val > 0) {
        count += val & 1;
        val >>= 1;
    }
    return count % 2;
};
// @lc code=end

// TEST:
console.log(kthGrammar(1, 1)); // 0
console.log(kthGrammar(2, 2)); // 1
console.log(kthGrammar(3, 3)); // 1 (row 3: 0110, 3rd = 1)
