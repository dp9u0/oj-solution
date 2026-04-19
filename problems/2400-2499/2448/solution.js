/*
 * @lc app=leetcode id=2448 lang=javascript
 *
 * [2448] Minimum Cost to Make Array Equal
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(nums, cost) {
    const n = nums.length;
    const idx = Array.from({ length: n }, (_, i) => i);
    idx.sort((a, b) => nums[a] - nums[b]);

    let total = 0;
    for (const c of cost) total += c;

    let acc = 0, target = 0;
    for (const i of idx) {
        acc += cost[i];
        if (acc * 2 >= total) {
            target = nums[i];
            break;
        }
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += Math.abs(nums[i] - target) * cost[i];
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(minCost([1,3,5,2], [2,3,1,14])); // 8
console.log(minCost([2,2,2,2,2], [4,2,8,1,3])); // 0
console.log(minCost([1,100], [1,100])); // 99
