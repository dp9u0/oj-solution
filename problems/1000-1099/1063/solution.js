/*
 * @lc app=leetcode.cn id=1063 lang=javascript
 *
 * [1063] 有效子数组的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var validSubarrays = function(nums) {
    const n = nums.length;
    const stack = []; // indices with strictly increasing values
    let ans = 0;
    for (let i = 0; i < n; i++) {
        // strict < so equal values stay (leftmost <= others allows equals)
        while (stack.length && nums[i] < nums[stack[stack.length - 1]]) {
            ans += i - stack.pop(); // [popped..i-1] are exactly the valid starts
        }
        stack.push(i);
    }
    while (stack.length) ans += n - stack.pop(); // extends to the end
    return ans;
};
// @lc code=end

// TEST:
console.log(validSubarrays([1,4,2,5,3])); // 11
console.log(validSubarrays([3,2,1])); // 3
console.log(validSubarrays([2,2,2])); // 6 (equal values stay valid)
console.log(validSubarrays([1])); // 1
console.log(validSubarrays([5,4,3,2,1])); // 5 (each start only itself)
console.log(validSubarrays([1,2,3])); // 6 (all prefixes work)
