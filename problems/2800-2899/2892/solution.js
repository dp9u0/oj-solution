/*
 * @lc app=leetcode.cn id=2892 lang=javascript
 *
 * [2892] 将相邻元素相乘后得到最小化数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minArrayLength = function(nums, k) {
    if (nums.some((x) => x === 0)) return 1;
    // collapse runs of adjacent 1s (no two adjacent 1s afterwards)
    const arr = [];
    for (const x of nums) {
        if (x === 1 && arr.length && arr[arr.length - 1] === 1) continue;
        arr.push(x);
    }
    const n = arr.length;
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + 1; // element alone
        let running = arr[i - 1]; // product of arr[j-1..i-1]
        for (let j = i; j >= 1; j--) {
            if (running > k) break;
            // merge arr[j-1..i-1] into a single element
            if (dp[j - 1] + 1 < dp[i]) dp[i] = dp[j - 1] + 1;
            if (j >= 2) running *= arr[j - 2];
        }
    }
    return dp[n];
};
// @lc code=end

// TEST:
console.log(minArrayLength([2,3,3,7,3,5], 20)); // 3
console.log(minArrayLength([3,3,3,3], 6)); // 4
console.log(minArrayLength([0,5,7], 3)); // 1
console.log(minArrayLength([1,1,1], 1)); // 1
console.log(minArrayLength([10,10], 99)); // 2
console.log(minArrayLength([5,1,9], 100)); // 1
