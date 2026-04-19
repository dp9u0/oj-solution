/*
 * @lc app=leetcode id=1590 lang=javascript
 *
 * [1590] Make Sum Divisible by P
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    const total = nums.reduce((a, b) => a + b, 0);
    const target = total % p;
    if (target === 0) return 0;

    const lastPos = new Map();
    lastPos.set(0, -1);
    let prefix = 0;
    let result = nums.length;

    for (let i = 0; i < nums.length; i++) {
        prefix = (prefix + nums[i]) % p;
        const need = ((prefix - target) % p + p) % p;
        if (lastPos.has(need)) {
            result = Math.min(result, i - lastPos.get(need));
        }
        lastPos.set(prefix, i);
    }
    return result === nums.length ? -1 : result;
};
// @lc code=end

// TEST:
console.log(minSubarray([3,1,4,2], 6)); // 1
console.log(minSubarray([6,3,5,2], 9)); // 2
console.log(minSubarray([1,2,3], 3)); // 0
