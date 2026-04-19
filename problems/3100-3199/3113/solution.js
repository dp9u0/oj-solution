/*
 * @lc app=leetcode id=3113 lang=javascript
 *
 * [3113] Find the Number of Subarrays Where Boundary Elements Are Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfSubarrays = function(nums) {
    const n = nums.length;

    // Left boundary: first element strictly greater than nums[i] to the left
    const left = new Int32Array(n);
    const stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length && nums[stack[stack.length - 1]] <= nums[i]) stack.pop();
        left[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(i);
    }

    // Group indices by value, then split by "left boundary" (separated by greater values)
    const groups = new Map();
    for (let i = 0; i < n; i++) {
        if (!groups.has(nums[i])) groups.set(nums[i], []);
        groups.get(nums[i]).push(i);
    }

    let result = 0;
    for (const [val, indices] of groups) {
        // Split indices into blocks separated by greater values
        // Two consecutive indices are in same block if left[j] < indices[i] (no greater element between them)
        let count = 1;
        for (let k = 1; k < indices.length; k++) {
            // Check if there's a greater element between indices[k-1] and indices[k]
            // This is true if left[indices[k]] >= indices[k-1]
            // Actually, we need to check the range between them
            // If left[indices[k]] >= indices[k-1], they're in different blocks
            if (left[indices[k]] >= indices[k - 1]) {
                result += count * (count + 1) / 2;
                count = 1;
            } else {
                count++;
            }
        }
        result += count * (count + 1) / 2;
    }

    return result;
};
// @lc code=end

// TEST:
console.log(numberOfSubarrays([1,4,3,3,2])); // 6
console.log(numberOfSubarrays([3,3,3])); // 6
console.log(numberOfSubarrays([1])); // 1
console.log(numberOfSubarrays([1,2,3,2,1])); // 5
console.log(numberOfSubarrays([1,1,1,1])); // 10