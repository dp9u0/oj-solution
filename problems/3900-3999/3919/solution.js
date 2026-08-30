/*
 * @lc app=leetcode id=3919 lang=javascript
 *
 * [3919] Minimum Cost to Move Between Indices
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var minCost = function(nums, queries) {
    const n = nums.length;
    const gap = new Array(n - 1);
    for (let i = 0; i < n - 1; i++) gap[i] = nums[i + 1] - nums[i];

    // F(i): closest(i) = i+1，向右可用 1 代价跨越边 i
    // B(i): closest(i+1) = i，向左可用 1 代价跨越边 i
    // save[i]: 跨越边 i 相比直接跳跃能节省的代价
    const saveF = new Array(n).fill(0);
    const saveB = new Array(n).fill(0);
    for (let i = 0; i < n - 1; i++) {
        const isF = i === 0 || gap[i] < gap[i - 1];
        const isB = i === n - 2 || gap[i] <= gap[i + 1];
        const s = gap[i] > 1 ? gap[i] - 1 : 0;
        saveF[i + 1] = saveF[i] + (isF ? s : 0);
        saveB[i + 1] = saveB[i] + (isB ? s : 0);
    }

    const ans = new Array(queries.length);
    for (let k = 0; k < queries.length; k++) {
        const l = queries[k][0], r = queries[k][1];
        if (l === r) {
            ans[k] = 0;
        } else if (l < r) {
            ans[k] = nums[r] - nums[l] - (saveF[r] - saveF[l]);
        } else {
            ans[k] = nums[l] - nums[r] - (saveB[l] - saveB[r]);
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(minCost([-5, -2, 3], [[0, 2], [2, 0], [1, 2]])); // [6, 2, 5]
console.log(minCost([0, 2, 3, 9], [[3, 0], [1, 2], [2, 0]])); // [4, 1, 3]
console.log(minCost([1, 2], [[0, 1], [1, 0], [0, 0]])); // [1, 1, 0]
console.log(minCost([0, 5, 10], [[0, 2], [2, 0], [1, 2], [2, 1]])); // [6, 2, 5, 1]
console.log(minCost([0, 5, 10, 15], [[0, 3], [3, 0]])); // [11, 3]
console.log(minCost([0, 100, 101, 201, 202], [[0, 4], [4, 0], [1, 3], [3, 1]])); // [103, 202, 101, 101]
