/*
 * @lc app=leetcode id=2616 lang=javascript
 *
 * [2616] Minimize the Maximum Difference of Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
    if (p === 0) return 0;
    nums.sort((a, b) => a - b);
    const n = nums.length;

    const canForm = (threshold) => {
        let count = 0;
        let i = 0;
        while (i < n - 1) {
            if (nums[i + 1] - nums[i] <= threshold) {
                count++;
                i += 2;
            } else {
                i++;
            }
        }
        return count >= p;
    };

    let lo = 0, hi = nums[n - 1] - nums[0];
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (canForm(mid)) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(minimizeMax([10,1,2,7,1,3], 2));  // 1
console.log(minimizeMax([4,2,1,2], 1));        // 0
console.log(minimizeMax([0,5,3,4], 0));        // 0
console.log(minimizeMax([1,1,0,4], 2));        // 3
