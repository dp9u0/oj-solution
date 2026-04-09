/*
 * @lc app=leetcode id=1856 lang=javascript
 *
 * [1856] Maximum Subarray Min-Product
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function(nums) {
    const n = nums.length;
    const MOD = 1e9 + 7;

    // Prefix sum
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];

    // Monotonic stack: find left boundary (first < nums[i] on left)
    const left = new Array(n);
    const stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length && nums[stack[stack.length - 1]] >= nums[i]) stack.pop();
        left[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(i);
    }

    // Find right boundary (first <= nums[i] on right)
    const right = new Array(n);
    stack.length = 0;
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && nums[stack[stack.length - 1]] > nums[i]) stack.pop();
        right[i] = stack.length ? stack[stack.length - 1] : n;
        stack.push(i);
    }

    let ans = 0n;
    for (let i = 0; i < n; i++) {
        const sum = BigInt(prefix[right[i]] - prefix[left[i] + 1]);
        const product = BigInt(nums[i]) * sum;
        if (product > ans) ans = product;
    }

    return Number(ans % BigInt(MOD));
};
// @lc code=end

// TEST:
console.log(maxSumMinProduct([1,2,3,2])); // 14
console.log(maxSumMinProduct([2,3,3,1,2])); // 18
console.log(maxSumMinProduct([3,1,5,6,4,2])); // 60
