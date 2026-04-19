/*
 * @lc app=leetcode id=3741 lang=javascript
 *
 * [3741] Minimum Distance Between Three Equal Elements II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    let groups = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!groups.has(nums[i])) groups.set(nums[i], []);
        groups.get(nums[i]).push(i);
    }

    let minDist = Infinity;
    for (let positions of groups.values()) {
        if (positions.length < 3) continue;
        // distance = 2 * (positions[k] - positions[i]) for i,j,k consecutive
        for (let i = 0; i + 2 < positions.length; i++) {
            let d = 2 * (positions[i + 2] - positions[i]);
            if (d < minDist) minDist = d;
        }
    }
    return minDist === Infinity ? -1 : minDist;
};
// @lc code=end

// TEST:
console.log(minimumDistance([1,2,1,1,3])); // 6
console.log(minimumDistance([1,1,2,3,2,1,2])); // 8
console.log(minimumDistance([1])); // -1
