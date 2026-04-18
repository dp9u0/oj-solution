/*
 * @lc app=leetcode id=3392 lang=javascript
 *
 * [3392] Count Subarrays of Length Three With a Condition
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    let ans = 0;
    for (let i = 0; i + 2 < nums.length; i++) {
        if (2 * (nums[i] + nums[i + 2]) === nums[i + 1]) ans++;
    }
    return ans;
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', result, result === expected ? 'OK' : 'FAIL expected ' + expected);
};
test(countSubarrays, [[1,2,1,4,1]], 1);
test(countSubarrays, [[1,1,1]], 0);
test(countSubarrays, [[0,0,0]], 1);
test(countSubarrays, [[1,4,1]], 1);
test(countSubarrays, [[-1,-4,-1]], 1);
