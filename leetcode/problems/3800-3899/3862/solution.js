/*
 * @lc app=leetcode id=3862 lang=javascript
 *
 * [3862] Find the Smallest Balanced Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestBalancedIndex = function(nums) {
    const n = nums.length;
    const CAP = 1e5 * 1e9 + 1;

    const rp = new Float64Array(n + 1);
    rp[n] = 1;
    for (let i = n - 1; i >= 0; i--) {
        if (rp[i + 1] > CAP) {
            rp[i] = CAP + 1;
        } else {
            const p = rp[i + 1] * nums[i];
            rp[i] = p > CAP ? CAP + 1 : p;
        }
    }

    let ls = 0;
    for (let i = 0; i < n; i++) {
        if (ls === rp[i + 1]) return i;
        ls += nums[i];
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(smallestBalancedIndex([2, 1, 2])); // 1
console.log(smallestBalancedIndex([2, 8, 2, 2, 5])); // 2
console.log(smallestBalancedIndex([1])); // -1
console.log(smallestBalancedIndex([5, 5])); // -1
console.log(smallestBalancedIndex([3, 1, 1, 3])); // 1
console.log(smallestBalancedIndex([1, 1])); // 0
