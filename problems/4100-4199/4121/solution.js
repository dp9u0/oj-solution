/*
 * @lc app=leetcode.cn id=4121 lang=javascript
 *
 * [4121] 使数组中所有元素相等的最小成本
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minCost = function(nums) {
    const n = nums.length;
    let ans = Infinity;
    let p = 0;
    while (p < n) {
        let q = p;
        while (q + 1 < n && nums[q + 1] === nums[p]) q++;
        const len = q - p + 1;
        // block needs an interior index for a pivot
        if (q >= 1 && p <= n - 2) {
            const cand = (n - len) * nums[p];
            if (cand < ans) ans = cand;
        }
        p = q + 1;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(minCost([1,2,3])); // 4
console.log(minCost([3,3,3,6,3,3])); // 9
console.log(minCost([3,4,4,5,4,4,3])); // 20
console.log(minCost([7,7,7])); // 0
console.log(minCost([3,5,3])); // 10
