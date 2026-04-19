/*
 * @lc app=leetcode id=2653 lang=javascript
 *
 * [2653] Sliding Subarray Beauty
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var getSubarrayBeauty = function(nums, k, x) {
    const offset = 50;
    const count = new Array(101).fill(0);
    const n = nums.length;
    const result = [];

    for (let i = 0; i < k; i++) {
        count[nums[i] + offset]++;
    }

    const findXth = () => {
        let cnt = 0;
        for (let v = 0; v < offset; v++) {
            cnt += count[v];
            if (cnt >= x) return v - offset;
        }
        return 0;
    };

    result.push(findXth());

    for (let i = k; i < n; i++) {
        count[nums[i] + offset]++;
        count[nums[i - k] + offset]--;
        result.push(findXth());
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(getSubarrayBeauty([1,-1,-3,-2,3], 3, 2)));        // [-1,-2,-2]
console.log(JSON.stringify(getSubarrayBeauty([-1,-2,-3,-4,-5], 2, 2)));      // [-1,-2,-3,-4]
console.log(JSON.stringify(getSubarrayBeauty([-3,1,2,-3,0,-3], 2, 1)));      // [-3,0,-3,-3,-3]
