/*
 * @lc app=leetcode id=3755 lang=javascript
 *
 * [3755] Find Maximum Balanced XOR Subarray Length
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxBalancedSubarray = function(nums) {
    let map = new Map();
    let xorPref = 0, oddPref = 0;
    map.set('0,0', 0);
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        xorPref ^= nums[i];
        oddPref += (nums[i] % 2 === 1) ? 1 : -1;
        let key = xorPref + ',' + oddPref;
        if (map.has(key)) {
            res = Math.max(res, i + 1 - map.get(key));
        } else {
            map.set(key, i + 1);
        }
    }
    return res;
};
// @lc code=end

// TEST:
console.log(maxBalancedSubarray([3,1,3,2,0])); // 4
console.log(maxBalancedSubarray([3,2,8,5,4,14,9,15])); // 8
console.log(maxBalancedSubarray([0])); // 0
