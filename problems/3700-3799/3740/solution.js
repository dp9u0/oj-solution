/*
 * @lc app=leetcode id=3740 lang=javascript
 *
 * [3740] Minimum Distance Between Three Equal Elements I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    const groups = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!groups.has(nums[i])) groups.set(nums[i], []);
        groups.get(nums[i]).push(i);
    }

    let minDist = Infinity;
    for (const indices of groups.values()) {
        for (let t = 0; t + 2 < indices.length; t++) {
            const dist = 2 * (indices[t + 2] - indices[t]);
            if (dist < minDist) minDist = dist;
        }
    }

    return minDist === Infinity ? -1 : minDist;
};
// @lc code=end

// TEST:
console.log(minimumDistance([1,2,1,1,3]));
console.log(minimumDistance([1,1,2,3,2,1,2]));
console.log(minimumDistance([1]));
console.log(minimumDistance([1,1,1]));
