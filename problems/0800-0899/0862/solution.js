/*
 * @lc app=leetcode id=862 lang=javascript
 *
 * [862] Shortest Subarray with Sum at Least K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    const deque = [];
    let result = n + 1;

    for (let i = 0; i <= n; i++) {
        while (deque.length > 0 && prefix[i] - prefix[deque[0]] >= k) {
            result = Math.min(result, i - deque[0]);
            deque.shift();
        }
        while (deque.length > 0 && prefix[deque[deque.length - 1]] >= prefix[i]) {
            deque.pop();
        }
        deque.push(i);
    }

    return result <= n ? result : -1;
};
// @lc code=end

// TEST:
console.log(shortestSubarray([1], 1)); // 1
console.log(shortestSubarray([1,2], 4)); // -1
console.log(shortestSubarray([2,-1,2], 3)); // 3
