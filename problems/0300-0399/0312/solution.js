/*
 * @lc app=leetcode id=312 lang=javascript
 *
 * [312] Burst Balloons
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    // 优化1：直接使用原数组，避免创建新数组
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];
    
    // 创建记忆化数组
    const memo = new Array(n + 2).fill(0)
        .map(() => new Array(n + 2).fill(-1));
    
    // 递归函数
    const solve = (left, right) => {
        // 如果是无效区间，返回0
        if (left + 1 === right) return 0;
        
        // 如果已经计算过，直接返回结果
        if (memo[left][right] !== -1) return memo[left][right];
        
        let maxValue = 0;
        // 遍历区间内的每个气球
        for (let i = left + 1; i < right; i++) {
            const leftNum = left === 0 ? 1 : nums[left - 1];
            const rightNum = right === n + 1 ? 1 : nums[right - 1];
            const currNum = nums[i - 1];
            
            const curr = leftNum * currNum * rightNum;
            const leftSum = solve(left, i);
            const rightSum = solve(i, right);
            
            maxValue = Math.max(maxValue, curr + leftSum + rightSum);
        }
        
        memo[left][right] = maxValue;
        return maxValue;
    };
    
    return solve(0, n + 1);
};
// @lc code=end

// Test cases
console.log(maxCoins([3,1,5,8])); // 167
console.log(maxCoins([1,5])); // 10
console.log(maxCoins([7])); // 7
