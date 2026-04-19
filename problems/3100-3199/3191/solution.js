/*
 * @lc app=leetcode id=3191 lang=javascript
 *
 * [3191] Minimum Operations to Make Binary Array Elements Equal to One I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n = nums.length;
    const diff = new Array(n + 1).fill(0);
    let flips = 0;
    let totalOps = 0;

    for (let i = 0; i < n; i++) {
        flips += diff[i];
        const cur = nums[i] ^ (flips % 2);
        if (cur === 0) {
            if (i + 3 > n) return -1;
            flips++;
            diff[i + 3]--;
            totalOps++;
        }
    }

    return totalOps;
};
// @lc code=end

// TEST:
console.log(minOperations([0,1,1,1,0,0]));
console.log(minOperations([0,1,1,1]));
console.log(minOperations([1,1,1]));
console.log(minOperations([0,0,0]));
