/*
 * @lc app=leetcode id=330 lang=javascript
 *
 * [330] Patching Array
 * 
 * 给定一个已排序的正整数数组 nums 和一个正整数 n，请找出并返回需要添加的最少数字的数量，
 * 使得 [1, n] 范围内的所有数字都可以被数组中某些数字的和表示。
 * 
 * 解题思路：
 * 这是一个贪心算法问题。我们需要从小到大遍历，确保每个数字都能被表示出来。
 * 1. 使用一个变量miss来表示当前无法表示的最小整数。
 * 2. 如果当前数组中的数字小于等于miss，那么我们可以表示[1, miss + nums[i]]范围内的所有数字。
 * 3. 如果当前数字大于miss，说明我们需要添加一个数字（即miss本身）来确保连续性。
 * 4. 每次添加一个数字后，我们可以表示的范围会扩大一倍。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
    let patches = 0;
    let i = 0;
    let miss = 1;
    
    while (miss <= n) {
        if (i < nums.length && nums[i] <= miss) {
            miss += nums[i];
            i++;
        } else {
            miss += miss;
            patches++;
        }
    }
    
    return patches;
};
// @lc code=end
