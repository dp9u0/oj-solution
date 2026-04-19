/*
 * @lc app=leetcode id=3644 lang=javascript
 *
 * [3644] Maximum K to Sort a Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sortPermutation = function(nums) {
    const n = nums.length;
    const visited = new Array(n).fill(false);
    let ans = 0x7FFFFFFF;
    let hasNonTrivial = false;

    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        let cycleAnd = 0x7FFFFFFF;
        let j = i;
        let len = 0;
        while (!visited[j]) {
            visited[j] = true;
            cycleAnd &= nums[j];
            j = nums[j];
            len++;
        }
        if (len > 1) {
            hasNonTrivial = true;
            ans &= cycleAnd;
        }
    }

    return hasNonTrivial ? ans : 0;
};
// @lc code=end

// TEST:
console.log(sortPermutation([0, 3, 2, 1])); // 1
console.log(sortPermutation([0, 1, 3, 2])); // 2
console.log(sortPermutation([3, 2, 1, 0])); // 0
console.log(sortPermutation([1, 2, 0]));    // 0
