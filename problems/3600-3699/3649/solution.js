/*
 * @lc app=leetcode id=3649 lang=javascript
 *
 * [3649] Number of Perfect Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var perfectPairs = function(nums) {
    const abs = nums.map(x => Math.abs(x)).sort((a, b) => a - b);
    const n = abs.length;
    let count = 0, i = 0;
    for (let j = 1; j < n; j++) {
        while (i < j && abs[i] * 2 < abs[j]) i++;
        count += j - i;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(perfectPairs([0,1,2,3])); // 2
console.log(perfectPairs([-3,2,-1,4])); // 4
console.log(perfectPairs([1,10,100,1000])); // 0
console.log(perfectPairs([1,1])); // 1
console.log(perfectPairs([0,0])); // 1
console.log(perfectPairs([2,4,6,8])); // 4