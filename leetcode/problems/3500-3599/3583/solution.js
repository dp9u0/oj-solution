/*
 * @lc app=leetcode id=3583 lang=javascript
 *
 * [3583] Count Special Triplets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function(nums) {
    const MOD = 1e9 + 7;
    const n = nums.length;
    const leftCount = new Map();
    const rightCount = new Map();

    // Initialize rightCount with all elements
    for (const num of nums) {
        rightCount.set(num, (rightCount.get(num) || 0) + 1);
    }

    let result = 0;

    for (let j = 0; j < n; j++) {
        const val = nums[j];
        // Remove current from rightCount (it's the middle element)
        rightCount.set(val, rightCount.get(val) - 1);

        const target = val * 2;
        const left = leftCount.get(target) || 0;
        const right = rightCount.get(target) || 0;
        result = (result + left * right) % MOD;

        // Add current to leftCount
        leftCount.set(val, (leftCount.get(val) || 0) + 1);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(specialTriplets([6,3,6]));       // 1
console.log(specialTriplets([0,1,0,0]));     // 1
console.log(specialTriplets([8,4,2,8,4]));   // 2
