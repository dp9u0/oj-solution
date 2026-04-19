/*
 * @lc app=leetcode id=1819 lang=javascript
 *
 * [1819] Number of Different Subsequences GCDs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countDifferentSubsequenceGCDs = function(nums) {
    const maxVal = Math.max(...nums);
    const exists = new Uint8Array(maxVal + 1);
    for (const x of nums) exists[x] = 1;

    const gcd = (a, b) => { while (b) { const t = b; b = a % b; a = t; } return a; };

    let count = 0;
    for (let g = 1; g <= maxVal; g++) {
        let g_ = 0;
        for (let m = g; m <= maxVal; m += g) {
            if (exists[m]) {
                g_ = gcd(g_, m);
                if (g_ === g) { count++; break; }
            }
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countDifferentSubsequenceGCDs([6,10,3])); // 5
console.log(countDifferentSubsequenceGCDs([5,15,40,5,6])); // 7
console.log(countDifferentSubsequenceGCDs([1])); // 1
console.log(countDifferentSubsequenceGCDs([6,12])); // 3
console.log(countDifferentSubsequenceGCDs([13,14,15])); // 5
