/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    // 1. 计算数组总和
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    
    // 2. 快速判断条件
    if (sum % 2 !== 0) return false;
    const target = sum / 2;
    
    // 3. 如果任何数字大于 target，直接返回 false
    if (Math.max(...nums) > target) return false;
    
    // 4. 创建 dp 数组，dp[i] 表示是否可以得到和为 i 的子集
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;
    
    // 5. 动态规划过程
    for (const num of nums) {
        // 从大到小遍历，避免重复计算
        for (let i = target; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
        // 提前返回
        if (dp[target]) return true;
    }
    
    return dp[target];
};

// TEST:
console.log(canPartition([1,5,11,5])); // true
console.log(canPartition([1,2,3,5]));  // false
