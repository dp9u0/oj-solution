/*
 * @lc app=leetcode id=3524 lang=javascript
 *
 * [3524] Find X Value of Array I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultArray = function(nums, k) {
    const result = new Array(k).fill(0);
    let prev = new Array(k).fill(0);
    for (const num of nums) {
        const curr = new Array(k).fill(0);
        const mod = num % k;
        curr[mod]++;
        for (let r = 0; r < k; r++) {
            if (prev[r] > 0) {
                curr[(r * mod) % k] += prev[r];
            }
        }
        for (let r = 0; r < k; r++) {
            result[r] += curr[r];
        }
        prev = curr;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(resultArray([1,2,3,4,5], 3))); // [9,2,4]
console.log(JSON.stringify(resultArray([1,2,4,8,16,32], 4))); // [18,1,2,0]
console.log(JSON.stringify(resultArray([1,1,2,1,1], 2))); // [9,6]
