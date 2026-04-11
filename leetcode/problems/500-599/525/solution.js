/*
 * @lc app=leetcode id=525 lang=javascript
 *
 * [525] Contiguous Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const map = new Map();
    map.set(0, -1);
    let prefix = 0;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        prefix += nums[i] === 1 ? 1 : -1;
        if (map.has(prefix)) {
            result = Math.max(result, i - map.get(prefix));
        } else {
            map.set(prefix, i);
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(findMaxLength([0,1])); // 2
console.log(findMaxLength([0,1,0])); // 2
console.log(findMaxLength([0,1,1,1,1,1,0,0,0])); // 6
