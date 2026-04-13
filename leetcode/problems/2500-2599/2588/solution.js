/*
 * @lc app=leetcode id=2588 lang=javascript
 *
 * [2588] Count the Number of Beautiful Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function(nums) {
    const count = new Map([[0, 1]]);
    let xor = 0, ans = 0;
    for (const num of nums) {
        xor ^= num;
        const c = count.get(xor) || 0;
        ans += c;
        count.set(xor, c + 1);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(beautifulSubarrays([4,3,1,2,4])); // 2
console.log(beautifulSubarrays([1,10,4]));     // 0
console.log(beautifulSubarrays([0,0]));        // 3
