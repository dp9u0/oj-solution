/*
 * @lc app=leetcode id=2411 lang=javascript
 *
 * [2411] Smallest Subarrays With Maximum Bitwise OR
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);
    const nearest = new Array(32).fill(-1);

    for (let i = n - 1; i >= 0; i--) {
        for (let b = 0; b < 32; b++) {
            if (nums[i] >> b & 1) {
                nearest[b] = i;
            }
        }
        let maxPos = i;
        for (let b = 0; b < 32; b++) {
            if (nearest[b] > maxPos) {
                maxPos = nearest[b];
            }
        }
        answer[i] = maxPos - i + 1;
    }

    return answer;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(smallestSubarrays([1, 0, 2, 1, 3]))); // [3,3,2,2,1]
console.log(JSON.stringify(smallestSubarrays([1, 2]))); // [2,1]
console.log(JSON.stringify(smallestSubarrays([0]))); // [1]
console.log(JSON.stringify(smallestSubarrays([1, 1, 1]))); // [1,1,1]
