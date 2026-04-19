/*
 * @lc app=leetcode id=3430 lang=javascript
 *
 * [3430] Maximum and Minimum Sums of at Most Size K Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minMaxSubarraySum = function(nums, k) {
    const n = nums.length;
    const S = k - 1;

    const countPairs = (a, b) => {
        if (S < 0) return 0n;
        const ea = Math.min(a, S + 1);
        if (ea <= 0) return 0n;
        const crossX = S - b + 1;
        if (crossX >= ea - 1) return BigInt(ea) * BigInt(b);
        if (crossX < 0) {
            return BigInt(ea) * BigInt(S + 1) - BigInt(ea) * BigInt(ea - 1) / 2n;
        }
        const full = crossX + 1;
        const rem = ea - full;
        return BigInt(full) * BigInt(b) + BigInt(rem) * BigInt(S + 1) - BigInt(rem) * BigInt(crossX + ea) / 2n;
    };

    let maxSum = 0n;
    {
        const prevG = new Int32Array(n).fill(-1);
        const nextGE = new Int32Array(n).fill(n);
        const stack = [];
        for (let i = 0; i < n; i++) {
            while (stack.length && nums[stack[stack.length - 1]] <= nums[i]) stack.pop();
            prevG[i] = stack.length ? stack[stack.length - 1] : -1;
            stack.push(i);
        }
        stack.length = 0;
        for (let i = n - 1; i >= 0; i--) {
            while (stack.length && nums[stack[stack.length - 1]] < nums[i]) stack.pop();
            nextGE[i] = stack.length ? stack[stack.length - 1] : n;
            stack.push(i);
        }
        for (let i = 0; i < n; i++) {
            maxSum += countPairs(i - prevG[i], nextGE[i] - i) * BigInt(nums[i]);
        }
    }

    let minSum = 0n;
    {
        const prevL = new Int32Array(n).fill(-1);
        const nextLE = new Int32Array(n).fill(n);
        const stack = [];
        for (let i = 0; i < n; i++) {
            while (stack.length && nums[stack[stack.length - 1]] >= nums[i]) stack.pop();
            prevL[i] = stack.length ? stack[stack.length - 1] : -1;
            stack.push(i);
        }
        stack.length = 0;
        for (let i = n - 1; i >= 0; i--) {
            while (stack.length && nums[stack[stack.length - 1]] > nums[i]) stack.pop();
            nextLE[i] = stack.length ? stack[stack.length - 1] : n;
            stack.push(i);
        }
        for (let i = 0; i < n; i++) {
            minSum += countPairs(i - prevL[i], nextLE[i] - i) * BigInt(nums[i]);
        }
    }

    return Number(maxSum + minSum);
};
// @lc code=end

// TEST:
console.log(minMaxSubarraySum([1,2,3], 2)); // 20
console.log(minMaxSubarraySum([1,-3,1], 2)); // -6
console.log(minMaxSubarraySum([5], 1)); // 10
console.log(minMaxSubarraySum([1,1,1], 3)); // 18 (6 subarrays, each max+min=2)
console.log(minMaxSubarraySum([3,1,2,4], 3)); //
