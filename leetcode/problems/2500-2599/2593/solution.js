/*
 * @lc app=leetcode id=2593 lang=javascript
 *
 * [2593] Find Score of an Array After Marking All Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
    const n = nums.length;
    const indices = Array.from({ length: n }, (_, i) => i);
    indices.sort((a, b) => nums[a] !== nums[b] ? nums[a] - nums[b] : a - b);

    const marked = new Array(n).fill(false);
    let score = 0;

    for (const i of indices) {
        if (marked[i]) continue;
        score += nums[i];
        marked[i] = true;
        if (i > 0) marked[i - 1] = true;
        if (i < n - 1) marked[i + 1] = true;
    }

    return score;
};
// @lc code=end

// TEST:
console.log(findScore([2, 1, 3, 4, 5, 2])); // 7
console.log(findScore([2, 3, 5, 1, 3, 2])); // 5
console.log(findScore([1])); // 1
console.log(findScore([5, 4, 3, 2, 1])); // 9
