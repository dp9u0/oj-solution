/*
 * @lc app=leetcode id=3226 lang=javascript
 *
 * [3226] Number of Bit Changes to Make Two Integers Equal
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function(n, k) {
    // k has a 1 where n has 0 -> impossible
    if ((k & ~n) !== 0) return -1;
    // count bits that are 1 in n but 0 in k
    let diff = n & ~k;
    let count = 0;
    while (diff) {
        count += diff & 1;
        diff >>= 1;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(minChanges(13, 4)); // 2
console.log(minChanges(21, 21)); // 0
console.log(minChanges(14, 13)); // -1
