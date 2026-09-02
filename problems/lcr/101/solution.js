/*
 * @lc app=leetcode.cn id=LCR 101 lang=javascript
 *
 * [LCR 101] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((a, b) => a + b, 0);
    if (sum % 2 !== 0) return false;
    const target = sum / 2;

    // dp[s] 表示能否凑出和为 s
    const dp = new Uint8Array(target + 1);
    dp[0] = 1;

    for (const num of nums) {
        if (num > target) return false; // 单个数就超过一半,无法分割
        for (let s = target; s >= num; s--) {
            if (dp[s - num]) dp[s] = 1;
        }
        if (dp[target]) return true; // 提前退出
    }
    return !!dp[target];
};
// @lc code=end

// TEST:
// 示例 1: [1,5,11,5] -> true
console.log(canPartition([1,5,11,5]) === true);

// 示例 2: [1,2,3,5] -> false
console.log(canPartition([1,2,3,5]) === false);

// 和为奇数,直接 false: [1,2,5] (sum=8 偶数但无法分) -> false
console.log(canPartition([1,2,5]) === false);

// 奇数总和: [1,2,3,4,5] (sum=15) -> false
console.log(canPartition([1,2,3,4,5]) === false);

// 单个大数超过一半: [2,2,3,5] sum=12 target=6, 无 6? 2+... 实际 [2,2,3]=7 不行; 检查 false
// [2,2,3,5]: 子集能否为6? 无(3+2+... 3+2=5,3+2+2=7) -> false
console.log(canPartition([2,2,3,5]) === false);

// 两等份完全相等: [1,1] -> true
console.log(canPartition([1,1]) === true);

// 三个数: [1,2,3] sum=6 target=3 -> [1,2] 与 [3] -> true
console.log(canPartition([1,2,3]) === true);

// 单元素: [1] sum=1 奇数 -> false
console.log(canPartition([1]) === false);

// 单元素偶和: [2] sum=2 target=1 -> false
console.log(canPartition([2]) === false);

// 需要多个组合: [1,1,2,2] sum=6 target=3 -> [1,2] 与 [1,2] -> true
console.log(canPartition([1,1,2,2]) === true);

// 大数组样例: [100,100,...] 能拆: [100,100] target=200
console.log(canPartition([100,100,100,100]) === true); // sum=400 target=200 两个100

// 无法拆(有数字超一半): [3,3,3,3,4] sum=16 target=8 -> 子集和8? 3+3+... 3+3=6,3+4=7,3+3+3=9,4 单独 -> 无法 -> false
console.log(canPartition([3,3,3,3,4]) === false);
