/*
 * @lc app=leetcode.cn id=1950 lang=javascript
 *
 * [1950] 所有子数组最小值中的最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMaximums = function(nums) {
    const n = nums.length;
    const best = new Array(n + 1).fill(0);
    const stack = []; // indices, values increasing
    for (let i = 0; i <= n; i++) {
        const v = i === n ? -1 : nums[i];
        while (stack.length && nums[stack[stack.length - 1]] >= v) {
            const mid = stack.pop();
            const left = stack.length ? stack[stack.length - 1] : -1;
            const span = i - left - 1;
            if (nums[mid] > best[span]) best[span] = nums[mid];
        }
        stack.push(i);
    }
    const ans = new Array(n);
    ans[n - 1] = best[n];
    for (let len = n - 1; len >= 1; len--) {
        best[len] = Math.max(best[len], best[len + 1]);
        ans[len - 1] = best[len];
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findMaximums([0,1,2,4]))); // [4,2,1,0]
console.log(JSON.stringify(findMaximums([10,20,50,10]))); // [50,20,10,10]
console.log(JSON.stringify(findMaximums([7]))); // [7]
console.log(JSON.stringify(findMaximums([5,5,5]))); // [5,5,5]
console.log(JSON.stringify(findMaximums([3,1,4,1,5]))); // [5,1,1,1,1]
