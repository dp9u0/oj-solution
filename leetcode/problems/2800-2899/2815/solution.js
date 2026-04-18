/*
 * @lc app=leetcode id=2815 lang=javascript
 *
 * [2815] Max Pair Sum in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    const maxDigit = (x) => {
        let d = 0;
        while (x > 0) { d = Math.max(d, x % 10); x = Math.floor(x / 10); }
        return d;
    };
    const groups = new Map();
    for (const num of nums) {
        const d = maxDigit(num);
        if (!groups.has(d)) groups.set(d, []);
        groups.get(d).push(num);
    }
    let result = -1;
    for (const [, arr] of groups) {
        if (arr.length < 2) continue;
        arr.sort((a, b) => b - a);
        result = Math.max(result, arr[0] + arr[1]);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(maxSum([112,131,411])); // -1
console.log(maxSum([2536,1613,3366,162])); // 5902
console.log(maxSum([51,71,17,24,42])); // 88
console.log(maxSum([1,2,3])); // -1
console.log(maxSum([10,20,30])); // -1
console.log(maxSum([31,13])); // 44
